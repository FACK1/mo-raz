const { Pool } = require('pg');
const url = require('url');
require('dotenv').config();

const { DB_URL } = process.env;

if (!DB_URL) {
  throw Error('No Database URL');
}


const params = url.parse(DB_URL);
const [username , password]= params.auth.split(':');


const options = {
 host: params.hostname,
 port:params.port,
 database: params.pathname.split('/')[1],
 max: process.env.DB_MAX_CONNECTIONS || 2,
 user: username,
 password: password
};

options.ssl = options.host !== 'localhost';

module.exports = new Pool(options);
