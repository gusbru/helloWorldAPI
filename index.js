/*
 * API RESTFul
 *
 *
 */

const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const router = require('./router');
const config = require('./config');

// create the server
const server = http.createServer((req, res) => {

  // getting the path
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // http method
  const method = req.method.toLowerCase();

  // payload
  // binding to listen the 'data' event to receive the payload
  const decoder = new StringDecoder('utf-8');
  let buffer = '';
  req.on('data', (data) => {
    buffer += decoder.write(data);
  });

  // request object emits an 'end' signal (handler of the 'end' event)
  req.on('end', () => {
    buffer += decoder.end();

    // construct the data object to send to the handler
    const data = {
      'trimmedPath' : trimmedPath,
      'method' : method,
      'payload' : buffer,
    };

    // choose the handler this request should go to
    const chosenHandler = typeof(router[trimmedPath]) !== 'undefined'
      ? router[trimmedPath]
      : router.notFound;

    // route the request to the handler specified in the router
    chosenHandler(data, (statusCode, payload) => {
      // use the status code called back by the handler
      statusCode = typeof(statusCode) === 'number' ? statusCode : 200;

      // use the payload called back by the handler
      payload = typeof(payload) === 'object' ? payload : {};

      // Convert the payload to String
      const payloadString = JSON.stringify(payload);

      // Return the response in JSON format
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(statusCode);
      res.end(payloadString);

      //
      console.log('sending back to user: ', payloadString);
    });


    console.log(trimmedPath);
    console.log(method);
    console.log(buffer);

  });

});

// start the server
server.listen(config.port, () => {
  console.log('Server is listen on port ', config.port, ' and running on ', config.envName, ' mode');
});



