#!/usr/bin/env bash

rm -rf .git
rm -rf .github
rm -rf .wporg
rm -rf node_modules
rm -rf src

find . -name '.*' -type f -maxdepth 1 -delete
find . -name '*.md' -type f -maxdepth 1 -delete
find . -name '*.json' -type f -maxdepth 1 -delete
find . -name '*.lock' -type f -maxdepth 1 -delete

rm -f webpack.config.js
