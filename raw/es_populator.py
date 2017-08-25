# Author: developmentseed
# Contributor: scisco, KAPPS-, drewbo
#
# License: CC0 1.0 Universal

#
# This is intended to populate an Elastic Search instance.
# For this file to work, you must make sure that you have a running instnace
# of Elastic Search

from __future__ import print_function

import json
import glob
import time
import sys
import os

from elasticsearch import Elasticsearch, client, RequestsHttpConnection
from elasticsearch.exceptions import ConnectionError
from elasticsearch import helpers

match_all = {
    "query": {
        "match_all": {}
     }
}

class Populator(object):

    def __init__(self, csvfile, url, index, doc_type, username, password, chunk_size=100):
        """ Intitate the class with the csv file """

        self.csv_file = csvfile
        self.es_url = url
        self.es_main_index = index
        self.es_main_type = doc_type
        self.es = Elasticsearch(self.es_url,
                                http_auth=(username, password),
                                use_ssl=True,
                                verify_certs=True,
                                connection_class=RequestsHttpConnection,
                                timeout=30,
                                max_retries=10,
                                retry_on_timeout=True)
        self.chunk_size = chunk_size

        self.mapping = {
            "properties": {
                "region": {
                    "type": "string",
                    "index": "not_analyzed",
                    "doc_values": True,
                    "fielddata": {
                        "loading": "eager_global_ordinals"
                    }
                },
                "agg_commodity": {
                    "type": "string",
                    "index": "not_analyzed",
                    "doc_values": True,
                    "fielddata": {
                      "loading": "eager_global_ordinals"
                    }
                },
                "agg_continent": {
                    "type": "string",
                    "index": "not_analyzed",
                    "doc_values": True,
                    "fielddata": {
                      "loading": "eager_global_ordinals"
                    }
                },
                "agg_subcontinent": {
                    "type": "string",
                    "index": "not_analyzed",
                    "doc_values": True,
                    "fielddata": {
                      "loading": "eager_global_ordinals"
                    }
                },
                "impactparameter": {
                    "type": "string",
                    "index": "not_analyzed",
                    "doc_values": True,
                    "fielddata": {
                      "loading": "eager_global_ordinals"
                    }
                },
                "commodity": {
                    "type": "string",
                    "index": "not_analyzed",
                    "doc_values": True,
                    "fielddata": {
                      "loading": "eager_global_ordinals"
                    }
                },
                "year": {
                    "type": "integer"
                },
                "Val": {
                    "type": "float"
                }
            }
        }

    def create_index(self):
        """ Check whether index exists, if not create it """

        indice = client.IndicesClient(self.es)

        if not indice.exists(self.es_main_index):
            indice.create(
                index=self.es_main_index
            )

        return True

    def check_type(self):
        """ Checks if the type already exists, if it does, first delete
        the type, then start uploading data """
        pass

        count_type = self.es.count(index=self.es_main_index,
                          doc_type=self.es_main_type,
                          body=match_all)

        if count_type['count'] > 0:
            print('Scenario %s already exists, deleting the current one. This can take a bit'
                  % self.es_main_type)
            self.es.delete_by_query(index=self.es_main_index,
                                  doc_type=self.es_main_type,
                                  body=match_all,
                                  conflicts='proceed')

            print('Waiting for 10 seconds to ensure the current type is ' +
                  'deleted.')
            time.sleep(10)

        return

    def create_mapping(self):
        """ Creates a mapping specific to the current index AND doc_type.
        No need to check for existence of either based on previous functions"""

        indice = client.IndicesClient(self.es)

        indice.put_mapping(index=self.es_main_index,
                           doc_type=self.es_main_type,
                           body=self.mapping)

    def populate(self):
        """ Populate Elasticsearch for the for the index and type given with
        the data proivded in the csv file """

        self.create_index()
        self.check_type()
        self.create_mapping()

        f = open(self.csv_file, 'rU')

        # Read the first line for all the headers
        headers = f.readline().split(',')

        # Read the rest of the document
        rows = f.readlines()
        added_counter = 0

        actions = []
        for row in rows:
            fields = row.split(',')
            obj = {}
            for header in headers:
                # we call lower-case here because we were originally using
                # analyzed strings in elasticsearch (and they were
                # automatically converted). Code was built based on that so it's
                # easiest to convert for now
                try:
                    obj[header.replace('\n', '')] = float(fields[
                        headers.index(header)].replace('\n', '').lower())
                except ValueError:
                    obj[header.replace('\n', '')] = fields[
                        headers.index(header)].replace('\n', '').lower()
                # check afterwards to replace empty strings with None (which json.dumps hopefully writes to null)
                if obj[header.replace('\n', '')] == '':
                    obj[header.replace('\n', '')] = None
            try:
                item = {
                    '_index': self.es_main_index,
                    '_type': self.es_main_type,
                    '_source': obj
                }

                actions.append(item)

                added_counter += 1
                print('%s new records added' % added_counter,
                      end='\r')
                sys.stdout.flush()

                if added_counter % self.chunk_size == 0:
                    helpers.bulk(self.es, actions)
                    actions = []

            except ConnectionError:
                print('There was a connection error. Check your Elastic' +
                      ' Search setting and make sure Elastic Search is ' +
                      'running.')
                return False

        # add the remaining items
        if actions:
            helpers.bulk(self.es, actions)

        print('The update is completed. %s new records were added.' %
              added_counter)


def time_spent(start, end):
    """ Returns a human friendly time statement """

    spent = end - start
    minutes = spent / 60
    seconds = spent % 60

    return '\nTime spent : %s minutes and %s seconds' % (int(minutes),
                                                         round(seconds, 2))

if __name__ == "__main__":
    start = time.time()

    username = sys.argv[1]
    password = sys.argv[2]

    scenarios = glob.glob('scenarios/*.csv')
    for scenario in scenarios:
        _type = os.path.split(scenario)[1].replace('.csv', '').replace('-', '_').lower()
        print('Adding scenario ' + _type)

        p = Populator(
            scenario,
            'https://ad21a5a8cb0789e9b73c2142d3c83e43.us-east-1.aws.found.io:9243/',
            'ifpri',
            _type,
            username,
            password,
            10000
        )
        p.populate()

    end = time.time()

    print(time_spent(start, end))
