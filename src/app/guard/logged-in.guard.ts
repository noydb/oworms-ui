import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

import { AppRoutes } from '../util/app.routes';

import { AlertService } from '../service/alert.service';
import { UserService } from '../service/user.service';

import { ErrorUtil } from '../util/error.util';

import { User } from '../model/user.interface';

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private readonly userService: UserService,
                private readonly alertService: AlertService,
                private readonly router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                _: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.userService
        .loadLoggedInUser()
        .pipe(
            take(1),
            map((_: User) => true),
            catchError((e: HttpErrorResponse) => {
                this.alertService.add(ErrorUtil.getMessage(e), true);
                if (e.status === 403) {
                    void this.router.navigate([AppRoutes.CREDENTIAL]);
                }

                return throwError(() => e);
            })
        );
    }
}
