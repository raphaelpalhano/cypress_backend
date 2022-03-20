export default {

  serverGenerator: (env) => {
    const serverData = typeof env !== 'undefined' ? controlEnv(env)
      : {
        url: 'https://serverest.dev/login',
        schema: '',
        timeout: 6000
      };
    return serverData;
  }

};

const controlEnv = (env) => {
  switch (env){
  case 'prod':
    return {
      url: 'https://serverest.dev/login',
      schema: '',
      timeout: 5000
    };
  case 'homolog':
    return {
      url: 'https://serverest.dev/',
      schema: '',
      timeout: 5000
    };
  case 'dev':
    return {
      url: 'https://serverest.dev/',
      schema: '',
      timeout: 2000
    };


  }
};
