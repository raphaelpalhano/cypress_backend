// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

// utils
import './commands/utils/schema.validation';
import './commands/utils/request.control';
import './commands/utils/string.control';
import './commands/utils/api.control';

//service-commom
import './commands/service/common/rest.service';

//service-specific
import './commands/service/users.service';


// db-configuration
import sqlServer from 'cypress-sql-server';
sqlServer.loadDBCommands();

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Server.defaults({
  delay: 500,
  force404: false,
  whitelist: () => true,
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
