/*
 * API RESTFul
 *
 *
 */

const http = require('http');
const url = require('url');

// create the server
const server = http.createServer((req, res) => {

  // getting the path
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  console.log(trimmedPath);

  res.end("From server\n");
});

// start the server
server.listen(3000, () => {
  console.log('Server is listen on port ')
});