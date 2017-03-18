#!/usr/bin/env bash
set -e # halt script on error

rm -rf app/assets/data/articles
mkdir app/assets/data/articles
node .build_scripts/article-generation/commodity-summary-generation.js
node .build_scripts/article-metadata.js
