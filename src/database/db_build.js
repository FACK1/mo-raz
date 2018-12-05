const fs = require('fs');
const path = require('path');
const dbConnection = require('./db_connection');

const buildFile = fs.readFileSync(path.join(__dirname, '/db_build.sql'), 'utf-8');

dbConnection.query(buildFile, (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.log('failed', error);
  } else {
    // eslint-disable-next-line no-console
    console.log('Success!');
  }
});
