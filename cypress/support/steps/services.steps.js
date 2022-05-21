import {Given}  from 'cypress-cucumber-preprocessor/steps';

Given('acess service', () => {
  cy.log(Cypress.config('baseUrl'));

});
