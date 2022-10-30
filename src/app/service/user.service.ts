import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { finalize, take, tap } from 'rxjs/operators';

import { UserHttpService } from './user.http.service';

import { User } from '../model/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly busy$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private readonly user$: BehaviorSubject<User> = new BehaviorSubject(undefined);

    constructor(private readonly userHttp: UserHttpService) {
        this.loadLoggedInUser()
            .pipe(take(1))
            .subscribe({
                next: (user: User) => {
                    this.user$.next(user);
                }
            });
    }

    loadLoggedInUser(forceReload: boolean = false): Observable<User> {
        if (!!this.user$.value && !forceReload) {
            return this.user$.asObservable();
        }

        this.busy$.next(true);

        return this.userHttp
            .retrieve()
            .pipe(
                tap((user: User) => {
                    this.user$.next(user);
                }),
                finalize(() => {
                    this.busy$.next(false);
                })
            );
    }

    getLoggedInUser(): Observable<User> {
        return this.user$;
    }

    update(user: User): Observable<User> {
        this.busy$.next(true);

        return this.userHttp
            .update(user)
            .pipe(
                switchMap(() => this.loadLoggedInUser(true)),
                take(1),
                finalize(() => {
                    this.busy$.next(false);
                })
            );
    }
}
