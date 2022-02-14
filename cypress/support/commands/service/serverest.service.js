/**
 * PT-BR:
 *  O service é como uma 'página' para nossa API.
 *  Aqui iremos guardar métodos que realizam ações em nossas APIs.
 *  A classe Rest herdáda armazena métodos genéricos que realizam requisições HTTP de acordo com os parâmetro enviados.
 *  Dessa forma podemos utiliza-la em todos os '*.services.js' que precisamos.
 *
 * EN:
 *  The service is like a 'page' for our API.
 * Here we will store methods that perform actions on our APIs.
 * The Rest class being extended has methods that performs HTTP requests according to the parameters sent.
 * So we can use it in all '*.services.js' that we need.
*/

import Rest from './common/_rest.service'
import {Factory} from '../../../fixtures/factory'

const USERS_URL = '/usuarios'
const LOGIN_URL = '/login'

export class ServeRest extends Rest {

    static getAllUsers(){
        return super.httpRequestWithoutBody('GET', USERS_URL)
    }

    static postUserByType(type){
        let body = Factory.getUser(type)
        return super.httpRequestWithBody('POST', USERS_URL, body)
    }

    static loginWith(login_type){
        let body = Factory.getUserToLogin(login_type)
        return super.httpRequestWithBody('POST', LOGIN_URL, body)
    }

    static deleteUser(id){
        return super.httpRequestWithoutBody('DELETE', `${USERS_URL}/${id}`)
    }
}
