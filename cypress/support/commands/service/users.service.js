/**
 * PT-BR:
 *  O service é como uma 'página' para nossa API.
 *  Aqui iremos guardar métodos que realizam ações em nossas APIs.
 *  A classe Rest herdáda armazena métodos genéricos que realizam requisições HTTP de acordo com os parâmetro enviados.
 *  Dessa forma podemos utiliza-la em todos os '*.services.js' que precisamos.
 *
 * EN:
 *  The service is like a 'page' for our API.
 * Here we will store methods that perform actions on our APIs.
 * The Rest class being extended has methods that performs HTTP requests according to the parameters sent.
 * So we can use it in all '*.services.js' that we need.
*/
import {Factory} from '../../../fixtures/factory';

const USERS_URL = '/usuarios';
const LOGIN_URL = '/login';


Cypress.Commands.add('getAllUsers', () => {
    cy.requestWithoutBody('GET', USERS_URL);

});

Cypress.Commands.add('postUserByType', (type) => {
    let body = Factory.getUser(type);
    cy.requestWithBody('POST', USERS_URL, body);
});

Cypress.Commands.add('loginWith', (login_type) => {
    let body = Factory.getUserToLogin(login_type);
    cy.requestWithBody('POST', LOGIN_URL, body).then((response) => {
        if( response.body.authorization){

            Cypress.env('token', response.body.authorization);
        }
        return response;
    });

});


Cypress.Commands.add('deleteUser', (id) => {
    cy.requestWithoutBody('DELETE', `${USERS_URL}/${id}`);

});

