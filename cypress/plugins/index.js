/// <reference types="cypress" />

const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs-extra');
const path = require('path');
//For connecting to SQL Server
const sqlServer = require('cypress-sql-server');

function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve('.', 'cypress', 'config', `${file}.json`);
    return fs.readJson(pathToConfigFile);
}



module.exports = (on, config) => {
    tasks = sqlServer.loadDBPlugin(getConfigurationByFile('db_prod'));
    on('task', tasks);
    on('file:preprocessor', cucumber());
    on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
            launchOptions.args.push('--disable-dev-shm-usage');
        }
        return launchOptions;
    });
  

    const file = config.env.configFile || 'prod';
    return getConfigurationByFile(file);
};





