# Acelerador_Cypress_API

  * Instalar: `npm i --save-dev {package}`.
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
  ~~~shell
  * docker build -t <nome_da_imagem> .
  * docker container run --rm -it -e tags=@tag -v %cd%:/usr/src/e2e <nome_da_imagem>
  * `O comando acima não funciona no Powershell devido aos dois pontos após %cd%`

  * -it (ativa logs) 
  * -e tags=@tag (nome da variável de ambiente ou da tag da feature em sí) 
  * -v %cd%:/usr/src/e2e (cria volume entre o container e o pc) 
  ~~~

# Passo a passo para novas implementações:

  TODO

