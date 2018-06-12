import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from '../app.configuration';
import { Router } from '@angular/router';

import { User } from '../models/user';

@Injectable()
export class MainService {

    private headers: HttpHeaders;

    constructor(private readonly http: HttpClient) {
        this.headers = new HttpHeaders().set('Authorization', Configuration.token);
    }

    getInfo(resolve, reject) {

        /*
        ** const options = { params: new HttpParams().set('Authorization', Configuration.token) } : {};
        */

        this.http.get(Configuration.REST_API + 'info', { headers: this.headers })
            .subscribe(
            (data: User) => {
                console.log(data);
                return data;
            },
            error => reject(),
            () => resolve()
            )
    }
}
