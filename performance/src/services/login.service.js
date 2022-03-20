import http from 'k6/http';

// Métricas: 
import { Trend, Rate, Counter } from 'k6/metrics';

// Espera requisição esperar milissegundos
import { sleep } from 'k6';

// verificação 
import { check, fail } from 'k6';


import users from '../fixtures/users.js';
import server from '../fixtures/server.js';



const loginDuration = Trend('loginDuration');
const loginfailRate = Rate('loginfailRate');
const loginSuccess = Rate('loginSuccess');
const loginRequests = Counter('loginRequests');
const baseServer = server.serverGenerator('prod');



export default function() {

    
  let response = http.post(baseServer.url, 
    {
      body: users.generateUser(),
      headers: { 'Content-Type': 'application/json' }
    });
    // métrica de duração:
  loginDuration.add(response.timings.duration);
    
  //Quantas requisições vão ser feitas, contador:
  loginRequests.add(1);

  // se igual 0 ou maior que 399 no statusCode, irá registrar um erro:
  loginfailRate.add(response.status == 0 || response.status > 399);

  // Vai registrar quantas vezes a requisição retornou algo diferente de 0
  // e menor igual que 399
  loginSuccess.add(response.status != 0 || response.status <= 399);

  // tempo máximo das requisições:

  if(!check(response, {
    'máximo de duração': (res) => res.timings.duration < baseServer.timeout
  })){
    fail(`A requisição passou o limite do tempo ${baseServer.timeout}`); 
  }

  sleep(1);

}


