import loginService from '../services/login.service.js';
import { group, sleep } from 'k6';
import {setup} from '../config/setup.js';

export const options = setup('low');

export default function(){
  group('Fazendo login na aplicação ServerRest', () => {
    loginService();
  });

  sleep(1);
}
