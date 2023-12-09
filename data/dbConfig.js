// No need to change this file
require('dotenv').config()
const knex = require('knex');
const configurations = require('../knexfile.js');
const environment = 'development'; // <---  For some reason the test suite doesnt like it when 'process.env.NODE_ENV' is being used. It throws error 
/**
 *  |
 * \/
 *  TypeError: Cannot read properties of undefined (reading 'client')

      7 | // What knex configuration is actually used?
      8 | // That depends on the value of process.env.NODE_ENV!
    > 9 | module.exports = knex(config[environment]);
 * 
 */

// While dotenv is being used to select the knex environment and works just fine --- I had to remove this to make the tests work.

// What knex configuration is actually used?
// That depends on the value of process.env.NODE_ENV!
module.exports = knex(configurations[environment]);