# Acelerador_Cypress_API

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

# Como subir a esteira no Jenkins 

  1. Sistema operacional?
  Linux == utilizar sh no jenkinsfile
  Windows == bat

  2. Servidor rodando?
   * baixe os plugins pipeline/cucumber/github/git/etc
   * configure o job pelo pipeline --> 
   * coloque a opção de pipeline por SCM -->
   * Aponte a URI do repositório
   * Clique em save  


# Configuração do plugin para DB

  1. Definir qual será o SGB que será utilizado no projeto
  2. Baixar: npm i {mysql} -D

  3. configuração do plugin
    - Em plugins/index.js
  ~~~javascript
      on('task', { queryDb: query => { return queryTestDb(query, config) }, }); 
  ~~~
  4. Utilizando o plugin

  ~~~javascript
  cy.task('queryDb', `SELECT COUNT(*) as "rowCount" FROM Persons WHERE City="Espoo"`).then((result) => {

            expect(result[0].rowCount).to.equal(1)
        })
  ~~~

  5. Criar commands para cada tipo de query SQL




# Estrutura do framework


## Feature

**Criar feature relacionado ao serviço**

* Users: Um arquivo feature representa o serviço de Usuários, compondo o CRUD nele.

## Steps

**Um arquivo step que representa todos passos da feature do serviço**

* Users: Um arquivo *users.step.js* representando os passos que vão ser feito no serviço users

## Commands/service

**Um arquivo generalista com command genérico e arquivo de command voltado para o serviço específico**

* rest.serive.js: arquivo com commands genéricos para fazer o CRUD.
* user.service.js: arquivo voltado para o serviço específico da feature.