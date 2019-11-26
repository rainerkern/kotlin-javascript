#!/bin/bash

rm -r web
mkdir web
npm init -y
npm install kotlin --save
npm install express --save
./gradlew assemble
node web/kotlin-javascript
