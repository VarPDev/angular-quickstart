import { Configuration } from '../app.configuration';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Login {
    canActivate(): boolean {
        if (Configuration.isLogged) {
            return true;
        } else {
            return false;
        }
    }
}