/// <reference types="cypress" />

const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs-extra')
const path = require('path')
//For connecting to SQL Server
const mysql = require('mysql')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('.', 'cypress', 'config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const fileDb = config.env.configFile || 'db_dev.json'
  const connection = mysql.createConnection(getConfigurationByFile(fileDb))
  // start connection to db
  connection.connect()
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}


module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.args.push('--disable-dev-shm-usage')
    }
    return launchOptions
  })
  on('task', { queryDb: query => { return queryTestDb(query, config) }, }); 

  const file = config.env.configFile || 'prod'
  return getConfigurationByFile(file)
}





