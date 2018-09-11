/*
 * Create and export the configuration variables
 */

let environments = {};

// Staging environment
environments.staging = {
  'port' : 3000,
  'envName' : 'staging'
};

// Production environment
environments.production = {
  'port' : 8000,
  'envName' : 'production'
};

// Determine the environment based on the command line
let currentEnvironment = typeof(process.env.NODE_ENV) === 'string'
  ?process.env.NODE_ENV.toLowerCase() : '';


let environmentToExport = typeof(environments[currentEnvironment]) === 'object'
  ? environments[currentEnvironment]
  : environments.staging;


// Export
module.exports = environmentToExport;