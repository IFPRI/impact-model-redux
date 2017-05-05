from elasticsearch import Elasticsearch, client, RequestsHttpConnection
from elasticsearch.exceptions import ConnectionError, TransportError
import sys
import argparse

class Deletor(object):

    def __init__(self, url, index, username, password):
        self.es_url = url
        self.es_main_index = index
        self.es = Elasticsearch(self.es_url,
                                http_auth=(username, password),
                                use_ssl=True,
                                connection_class=RequestsHttpConnection)

    def delete(self, type):
        ## make sure index exists
        indice = client.IndicesClient(self.es)
        try:
            if indice.exists(self.es_main_index):
            ## if type is 'all' delete everything
                if type == 'all':
                    try:
                        indice.delete(index=self.es_main_index)
                        print('Deleted ' + self.es_main_index)
                        return True
                    except ConnectionError:
                        print('There was a connection error. Check your Elastic' +
                        ' Search setting and make sure Elastic Search is' +
                        'running.')
                        return False
                elif type:
                    try:
                        if indice.exists_type(index=self.es_main_index, doc_type=type):
                            indice.delete_mapping(index=self.es_main_index, doc_type=type)
                            print('Deleted ' + self.es_main_index + '/' + type)
                            return True
                    except ConnectionError:
                        print('There was a connection error. Check your Elastic' +
                        ' Search setting and make sure Elastic Search is' +
                        'running.')
                        return False
        except TransportError:
            print('Incorrect username or password')
            return False


if __name__ == "__main__":

    parser = argparse.ArgumentParser(description='Delete the index or individual scenarios from the IFPRI IMPACT elasticsearch instance')
    parser.add_argument('username', metavar='user', type=str, help='elasticsearch username')
    parser.add_argument('password', metavar='pass', type=str, help='elasticsearch password')
    parser.add_argument('--scenario', metavar='type', type=str, help='scenario name')
    parser.add_argument('--delete-all', action='store_const', const='all', help='delete all scenarios in the elasticsearch instance')
    args = parser.parse_args()
    to_delete = args.scenario or args.delete_all

    d = Deletor(
    'https://82e66fb22a73abdaa81040f2abdc298f-us-east-1.foundcluster.com:9243/',
    'ifpri',
    args.username,
    args.password
    )

    d.delete(to_delete)
