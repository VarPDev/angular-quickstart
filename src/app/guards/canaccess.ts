import { Login } from './login';
import { Permissions } from '../models/permissions';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CanAccess implements CanActivate {

    constructor(private login: Login) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.login.canActivate()) {
            return route.data.permission.enabled;
        } else {
            return true;
        }
    }
}