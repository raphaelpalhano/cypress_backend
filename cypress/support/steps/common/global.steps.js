import { Then } from 'cypress-cucumber-preprocessor/steps';



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
        console.log(e);
      }

    });
  }
);