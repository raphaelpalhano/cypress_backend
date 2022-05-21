import { Before } from 'cypress-cucumber-preprocessor/steps';


Before(() => {
  cy.log(`Iniciando a Feature ${window.testState.feature.tags[0].name.replace('@', '')}`);
  cy.changeBaseUrlIfNotEq('serverest');


});


afterEach(() => {
  cy.log('This will be logged after each scenario');
});

after(() => {
  cy.log('This will be logged after all scenarios');
});
