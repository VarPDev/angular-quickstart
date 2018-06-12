import { Injectable } from '@angular/core';

@Injectable()
export abstract class Configuration {

    protected constructor() { }

    // STATIC
    static REST_API = 'your_base_api_address/';
    static token = 'your_token'

    // GLOBAL VARIABLES
    static isLogged: Boolean = true;

}
