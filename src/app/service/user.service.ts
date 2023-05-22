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

    isBusy(): Observable<boolean> {
        return this.busy$.asObservable();
    }

    login(u: string, p: string): Observable<User> {
        this.busy$.next(true);

        return this.userHttp
        .retrieve(u, p)
        .pipe(
            take(1),
            finalize(() => {
                this.busy$.next(false);
            })
        );
    }

    loadLoggedInUser(forceReload: boolean = false): Observable<User> {
        if (!!this.user$.value && !forceReload) {
            return this.user$.asObservable();
        }

        this.busy$.next(true);

        return this.userHttp
        .retrieve()
        .pipe(
            take(1),
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

    likeWord(wordUUID: string): Observable<User> {
        this.busy$.next(true);

        return this.userHttp
        .likeWord(wordUUID)
        .pipe(
            take(1),
            switchMap(() => this.loadLoggedInUser(true)),
            take(1),
            finalize(() => {
                this.busy$.next(false);
            })
        );
    }
}
