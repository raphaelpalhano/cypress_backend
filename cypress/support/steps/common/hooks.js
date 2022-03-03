beforeEach(() => {
    cy.log('This will be logged before each scenario');
});

afterEach(() => {
    cy.log('This will be logged after each scenario');
});

after(() => {
    cy.log('This will be logged after all scenarios');
});
