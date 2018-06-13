import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export abstract class Configuration {

    protected constructor() { }

    // STATIC
    static REST_API = environment.apiUrl;
    static token = 'your_token';

    // GLOBAL VARIABLES
    static isLogged: Boolean = true;

}
