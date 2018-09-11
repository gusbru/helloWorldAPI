/*
 * API RESTFul
 *
 *
 */

const http = require('http');
const config = require('./src/config');
const unifiedServer = require('./src/server');

// create the server
const server = http.createServer((req, res) => {

  // create the server
  unifiedServer(req, res);

});

// start the server
server.listen(config.port, () => {
  console.log('Server is listen on port ', config.port, ' and running on ', config.envName, ' mode');
});



