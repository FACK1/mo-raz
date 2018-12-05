const http = require('http');
const router = require('./router');
require('dotenv').config();

const PORT = process.env.PORT || 8001;

const server = http.createServer(router);
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(` the server up and running on port ${PORT}!`);
});
