Cypress.Commands.add('requestWithBody', (method, endpoint, body, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) => {

    return  cy.request({
            method: method,
            url: endpoint,
            body: body,
            failOnStatusCode: failOnStatusCode,
            timeout: timeout
        })
})


Cypress.Commands.add('requestWithoutBody', (method, endpoint, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) => {
        return cy.request({
            method: method,
            url: endpoint,
            failOnStatusCode: failOnStatusCode,
            timeout: timeout
        })
})