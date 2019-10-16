# Crash Reporting API

This api will serve up data to the front end located at: https://github.com/Verdagio/crash-reporting-ui

## Getting started

### Dependencies:
 - Node version 10.13
 - NPM version 6.9

### How to 
- first `npm install`
- then `tsc` to build the project
- then `docker-compose up --build` to run the API on http://localhost:5000

## known issue
node cannot find lib folder in docker when building procject inside container exclusively. this is why we build first then run docker-compose up command
