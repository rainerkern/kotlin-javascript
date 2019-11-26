#!/bin/bash

rm -r web
mkdir web
npm init
npm install kotlin --save
npm install express --save
./gradlew assemble
node web/4-run-with-node
