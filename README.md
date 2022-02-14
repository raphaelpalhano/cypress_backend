# Acelerador_Cypress_API


# Estrutura do framework


## Feature

**Criar feature relacionado ao serviço**

* Users: Um arquivo feature representa o serviço de Usuários, compondo o CRUD nele.

~~~gherkin
      Feature: Users ServeRest
   
    Background: Been Logged In
      Given that register a user type "admin"
      When that is logged with "admin"

    @get
    Scenario: Requesting from serverest API and validating contract
        Given request all the users from /usuarios
        Then must be responsed the schema "get-users" with status 200

~~~~


## Steps

**Um arquivo step que representa todos passos da feature do serviço**

* Users: Um arquivo representando genérico com comando base e os passos que vão ser feito no serviço users

~~~javascript
  import { When, Then, Given, And } from "cypress-cucumber-preprocessor/steps";


  Given(`that register a user type {string}`, (register_type) => {
    cy.postUserByType(register_type).then((res) => {
      console.log("CADASTRO >> ", res);
    });
  });

  When(`that is logged with {string}`, (login_type) => {
    cy.loginWith(login_type).then((login_response) => {
      expect(login_response.body).to.have.property("message");
      expect(login_response.body.message).to.equal("Login realizado com sucesso");
    });
  });

Then(
  `must be responsed the schema {string} with status {int}`,
  (schema, status) => {
    cy.get("@Response").then((res) => {
      cy.contractValidation(res, schema, status).then((validation) => {
        expect(validation).to.be.eq("Contrato validado com sucesso.");
      });
    });
  }
);
~~~




## Commands/service

**Um arquivo generalista com command genérico e arquivo de command voltado para o serviço específico**

* rest.serive.js: arquivo com commands genéricos para fazer o CRUD.

 *cypress/support/commands/service/rest.service.js*
~~~~javascript
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

~~~~


* user.service.js: arquivo voltado para o serviço específico da feature.

 *cypress/support/commands/service/common/rest.service.js*
~~~~javascript
Cypress.Commands.add('getAllUsers', () => {
    cy.requestWithoutBody('GET', USERS_URL)
})

Cypress.Commands.add('postUserByType', (type) => {
        let body = Factory.getUser(type)
        cy.requestWithBody('POST', USERS_URL, body)
})

Cypress.Commands.add('loginWith', (login_type) => {
        let body = Factory.getUserToLogin(login_type)
       cy.requestWithBody('POST', LOGIN_URL, body).then((response) => {
          if( response.body.authorization){
              Cypress.env('token', response.body.authorization)
          }
          return response
       })
       
})


Cypress.Commands.add('deleteUser', (id) => {
    cy.requestWithoutBody('DELETE', `${USERS_URL}/${id}`)
    
})

~~~~


  * Instalar: `npm i {package} --save-dev`.
  * Rodar em modo headless: `npm run cy:run`
  * Rodar em tela gráfica: `npm run cy:open`
  * Gerar o report HTML(sempre após rodar o cypress): `npm run cy:report`
  * Limpar os reports: `npm run cy:clear`

# Para gerar o report html execute os comandos na seguinte ordem:
  `npm run cy:clear` > `npm run cy:run` > `npm run cy:report`

# Dependências:

  * [**Cypress**](https://www.cypress.io/)
  * [**Cypress-cucumber-preprocessor**](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
  * [**Fs-extra**](https://www.npmjs.com/package/fs-extra)
  * [**Rimraf**](https://www.npmjs.com/package/rimraf)
  * [**AJV**](https://www.npmjs.com/package/ajv)
  * [**Multiple-cucumber-html-reporter**](https://www.npmjs.com/package/multiple-cucumber-html-reporter)
  * [**Faker-br**](https://www.npmjs.com/package/faker-br)


# Como rodar o projeto pelo docker:
  ~~~yml
  * build: docker build -t <nome_da_imagem> .
  * Linux-run: docker container run --rm -it -e tags=@tag -v %cd%:/usr/src/e2e <nome_da_imagem>
  * Windows-run: docker run -i -v "%cd%":/usr/src/e2e -t <nome_da_imagem> --spec cypress/  integration/spec/*.feature 
  
  * -it (ativa logs) 
  * -e tags=@tag (nome da variável de ambiente ou da tag da feature em sí) 
  * -v %cd%:/usr/src/e2e (cria volume entre o container e o pc) 
  ~~~
 


# Configuração do plugin para DB

  
  1. Baixar: `npm i cypress-sql-server -D`

  2. configuração do plugin
    - Em plugins/index.js
  ~~~javascript
      const sqlServer = require('cypress-sql-server');
      module.exports = (on, config) => {
      tasks = sqlServer.loadDBPlugin(getConfigurationByFile('db_prod'));
      on('task', tasks);
    }
  ~~~
  3. Utilizando o plugin

  ~~~javascript
    cy.sqlServer('SELECT' 'test').should('eq', 'test');
  ~~~

  4. Criar commands para cada tipo de query SQL




