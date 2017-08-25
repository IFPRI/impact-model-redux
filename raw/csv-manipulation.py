import glob
import os
import sys
import csv
import re

# get target file
target = str(sys.argv[1])

# create scenario directory if it doesn't exist
if not os.path.exists('scenarios'):
    os.makedirs('scenarios')

# use csvfix to split up the data by scenarios (column 2)
print 'separating target file: ' + target
os.system('csvfix file_split -f 2 -ufn "' + target + '"')

all_files = glob.glob('file_*.csv')
all_files.pop(all_files.index('file_scenario.csv'))

# check for production type variable
production_type = False
with open('file_scenario.csv', 'rU') as pt:
    preader = csv.reader(pt)
    for row in preader:
        if row[4] == 'productiontype':
            production_type = True
            print 'Warning: data contains a production type column which could result in incorrect aggregations'


# create aggregation/mapping files
agg_map = {}
with open('aggregate_commodity.csv', 'rU') as f:
    freader = csv.reader(f)
    for row in freader:
        agg_map[row[1]] = row[0]

c_map = {}
sc_map = {}
with open('aggregate_region.csv', 'rU') as c:
    creader = csv.reader(c)
    for row in creader:
        c_map[row[1]] = row[2]
        sc_map[row[1]] = row[3]


print 'creating ' + str(len(all_files)) + ' files'

# create output files based on mappings and cleaning necessary for elasticsearch
for file in all_files:
    print 'creating file: ' + file.replace('file_', '')
    data = []
    with open(file, 'rb') as csvfile:
        creader = csv.reader(csvfile)
        for row in creader:
            data.append(row)
    for d in data:
        # for impactparameter, anything after the first space is removed
        d[0] = re.sub(' .*', '', d[0])

        # if we have a matching commodity, insert the commodity aggregation
        # substitute underscores for spaces
        if d[2] in agg_map:
            d.append(re.sub(' ', '_', agg_map[d[2]]))
        else:
            d.append('')
        # if we have a matching region, insert the continent and subcontinent
        # sbustitute underscores for spaces and dashes
        if d[3] in c_map:
            d.append(re.sub(' |-', '_', c_map[d[3]]))
            d.append(re.sub(' |-', '_', sc_map[d[3]]))
        else:
            d.append('')
            d.append('')
        # now that the region is matched; replace spaces with underscores
        d[3] = re.sub(' ', '_', d[3])

        # eliminate column 4 (production type) if it there
        if production_type:
            d.pop(4)
        # eliminate column 1 (scenario) since it is already the file name
        d.pop(1)

    # insert header row
    data.insert(0, ['impactparameter', 'commodity', 'region', 'year', 'Val',
                    'agg_commodity', 'agg_continent', 'agg_subcontinent'])

    # write files
    with open(file.replace('file_', 'scenarios/'), 'wb') as fo:
        a = csv.writer(fo, delimiter=',')
        a.writerows(data)

    # delete temporary files
    os.remove(file)

os.remove('file_scenario.csv')
