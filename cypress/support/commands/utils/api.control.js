import stringControl from '../../commands/utils/string.control';



Cypress.Commands.add('changeBaseUrlIfNotEq', (host) => {

  if(typeof window !== undefined && !stringControl.envControl(host)){
    Cypress.config('baseUrl', Cypress.env(window.testState.feature.tags[0].name.replace('@', '')));
  }

});


