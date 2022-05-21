export default {
  envControl:(host) => {
    const base = JSON.stringify(Cypress.env(window.testState.feature.tags[0].name.replace('@', ''))).toString();
    return base.includes(host);
  },

};






