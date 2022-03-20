

const optionsControl =  (option, object={}) => {

  switch (option) {
  case 'low':
    return  {
      vus: 20,
      duration: '30s',
    };
  case 'medium':
    return  {
      vus: 40,
      duration: '50s',
    };
  case 'hight':
    return {
      vus: 150,
      duration: '2m',
    };
  case 'random':
    return {
      vus: randomItem.randomIntBetween(1,500),
      duration: `${randomItem.randomIntBetween(500,600)}s`
    };
  case 'choice':

    return object;
  }
};


export const setup = (option='low', object={}) => {
  const options = typeof __ENV.K6_VUS !== 'undefined' && typeof __ENV.K6_DURATION !== 'undefined' ?
    {vus: __ENV.K6_VUS,duration: __ENV.K6_DURATION}  : optionsControl(option, object);
  return options;
};







