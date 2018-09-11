// define the handlers
let handlers = {};

handlers.hello = (data, callback) => {
  // callback a http status code and a payload (object)
  let message = {
    "message" : ''
  };
  switch (data.method) {
    case 'post':
      message.message = "welcome :)";
      break;
    default:
      message.message = "";
  }
  callback(200, message);
};

handlers.notFound = (data, callback) => {
  callback(404);
};

module.exports = handlers;