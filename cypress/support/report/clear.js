/**
 * EN: You can run this script to clear the report folder, using 'npm run cy:clear'
 *
 * PT-BR: Você pode executar este script para limpar a pasta de reports, usando 'npm run cy:clear'
*/
var rimraf = require('rimraf');

rimraf.sync('reports/cucumber-json/*.json');
rimraf.sync('reports/html/*');
rimraf.sync('reports/screenshots/specs*');
rimraf.sync('reports/junit/*.xml');
