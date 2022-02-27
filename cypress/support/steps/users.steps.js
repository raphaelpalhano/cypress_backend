/// <reference types="cypress" />
import { When, Then, Given, And } from 'cypress-cucumber-preprocessor/steps';


Given(`that register a user type {string}`, (register_type) => {
    cy.postUserByType(register_type).then((res) => {
    
    });
});

Given(`that is logged with {string}`, (login_type) => {
    cy.loginWith(login_type).then((login_response) => {
        expect(login_response.body).to.have.property('message');
        expect(login_response.body.message).to.equal('Login realizado com sucesso');
    });
});

Given('that have registered a user in the plataform', () => {
  
    cy.getAllUsers().then((users) => {
        expect(users.body.quantidade).to.be.greaterThan(1);
        cy.wrap(users).as('Users');
    });
});

When('to save the id of one of the users', () => {
  
    cy.get('@Users').then((users) => {
        cy.log('ID DO USUARIO >> ', users.body.usuarios[0]._id);
        cy.wrap(users.body.usuarios[0]._id).as('UserID');
    
    });
});

And('delete the user by the id', () => {
    cy.get('@UserID').then((id) => {
        cy.deleteUser(id).then((res) => {
            cy.wrap(res).as('Response');
        });
    });
});


When('request all the users from /usuarios', () => {
    cy.getAllUsers().then((users) => {
        console.log('aaaa')
        console.log(users)
        cy.wrap(users).as('Response');
    });
});

Given(`post the user of type {string}`, (user_type) => {
    cy.postUserByType(user_type).then((post_response) => {
        cy.wrap(post_response).as('Response');
    });
});


Then('must be responsed the schema {string} with request {string}',
    (service, request) => {
    
        /**
     * EN:
     * The parameter 'status' is the name of json file that keep the schema of that request.
     * The parameter 'schema' is the folder where my schema must be stored.
     * For example: schema/status == get-user/200.json || post-user/400.json
     *
     * PT-BR:
     * O parâmetro 'status' é o nome do arquivo json que armazena o schema da requisição.
     * O parâmetro 'schema' é a pasta onde deve ser armazenado o schema.
     * Por exemplo: schema/status == get-user/200.json || post-user/400.json
     */
  
        cy.get('@Response').then((res) => {
     
            try{
      
                cy.contractValidation(res, service, request).then((validation) => {
       
                    expect(validation).to.be.eq('Contrato validado com sucesso.');
                });
            }catch(e){
                console.log(e)
            }
      
        });
    }
);

