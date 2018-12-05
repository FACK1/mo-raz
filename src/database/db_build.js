const fs = require ("fs");
const path = require('path');
const db_connection = require ("./db_connection");

const build_file =fs.readFileSync(path.join(__dirname, '/db_build.sql'), 'utf-8');

db_connection.query(build_file, error =>{
  if (error){
    console.log ("failed", error);
  } else {
    console.log("Success!");
  }
});
