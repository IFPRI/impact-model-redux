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

# standard formatter
def es_format(column):
    try:
        # we do this rather than type checking because some numbers are stored as strings
        float(column)
        return column
    except ValueError:
        return re.sub(' |-', '_', column).lower().strip()

# for finding matching population for calculating total calories
def pop_match(data_row, match_row):
    return data_row[0].lower() == 'popxagg' and (data_row[1:5] == match_row[1:5])


# create output files based on mappings and cleaning necessary for elasticsearch
for file in all_files:
    print 'creating file: ' + file.replace('file_', '')
    data = []
    with open(file, 'rb') as csvfile:
        creader = csv.reader(csvfile)
        for row in creader:
            data.append(row)

    full_data = []
    for row in data:
        full_data.append(row)
        if row[0].lower() == 'percapkcalxagg':
            # calculate total calories
            matching_pop = [drow for drow in data if pop_match(drow, row)][0]
            total_cal = float(row[5]) * float(matching_pop[5])
            new_row = ['totcalxagg'] + row[1:5] + [total_cal]
            full_data.append(new_row)

    for row in full_data:
        ### add fields
        # if we have a matching commodity, insert the commodity aggregation
        if row[2] in agg_map:
            row.append(agg_map[row[2]])
        else:
            row.append('')
        # if we have a matching region, insert the continent and subcontinent
        if row[3] in c_map:
            row.append(c_map[row[3]])
            row.append(sc_map[row[3]])
        else:
            row.append('')
            row.append('')

        ### transform the data
        # for impactparameter, anything after the first space is removed
        row[0] = re.sub(' .*', '', row[0])
        # replace spaces and dashes with underscores in all columns
        for index, col in enumerate(row):
            row[index] = es_format(col)

        ### remove fields
        # eliminate column 4 (production type) if it there
        if production_type:
            row.pop(4)
        # eliminate column 1 (scenario) since it is already the file name
        row.pop(1)

    # insert header row
    full_data.insert(0, ['impactparameter', 'commodity', 'region', 'year', 'Val',
                    'agg_commodity', 'agg_continent', 'agg_subcontinent'])

    # write files
    with open(file.replace('file_', 'scenarios/'), 'wb') as fo:
        a = csv.writer(fo, delimiter=',')
        a.writerows(full_data)

    # delete temporary files
    os.remove(file)

os.remove('file_scenario.csv')
