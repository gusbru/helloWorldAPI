# helloWorldAPI
## Homework Assignment #1
Hello World API in Node

## Specifications
Please create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice. 

2. When someone posts anything to the route /hello, you should return a 
welcome message, in JSON format. This message can be anything you want. 

## How to run

You can start the server in the staging or production mode. If you do not specify,
the default is the staging mode.

To run the server in *staging* mode:
```
NODE_ENV=staging node index.js
```

or, simple
```
node index.js
```

To run the server in *production* mode:
```
NODE_ENV=production node index.js
```

## How to test
In order to test the API, we recommend using [Postman](https://www.getpostman.com/).

For *production* the port is 8000 and for *staging* the port is 3000.


