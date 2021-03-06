#!/usr/bin/env bash
set -e # halt script on error

rm -rf app/assets/data/articles
mkdir app/assets/data/articles
node .build_scripts/convert-csv.js
node .build_scripts/article-generation/commodity-summary.js
node .build_scripts/article-generation/country-summary.js
node .build_scripts/article-generation/scenario.js
node .build_scripts/article-metadata.js
