/*
 * API RESTFul
 *
 *
 */

const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

// create the server
const server = http.createServer((req, res) => {

  // getting the path
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // http method
  const method = req.method.toLowerCase();

  // payload
  const decoder = new StringDecoder('utf-8');
  let buffer = '';

  req.on('data', (data) => {
    buffer += decoder.write(data);
  });

  req.on('end', () => {
    buffer += decoder.end();
  });


  console.log(trimmedPath);
  console.log(method);

  res.end("From server\n");
});

// start the server
server.listen(3000, () => {
  console.log('Server is listen on port ')
});