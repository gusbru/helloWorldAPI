/*
 * Router configuration
 */

const handlers = require('./handlers');

// define the routers
const router = {
  'hello': handlers.hello,
  'notFound' : handlers.notFound
};

module.exports = router;