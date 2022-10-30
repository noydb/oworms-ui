import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { UserHttpService } from './user.http.service';

import { User } from '../model/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly busy$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private readonly user$: BehaviorSubject<User> = new BehaviorSubject(undefined);

    constructor(private readonly userHttp: UserHttpService) {
    }

    isBusy(): Observable<boolean> {
        return this.busy$.asObservable();
    }

    setUser(arg: User): void {
        this.user$.next(arg);
    }

    retrieve(): Observable<User> {
        if (!!this.user$.value) {
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

    update(user: User): Observable<User> {
        this.busy$.next(true);

        return this.userHttp
            .update(user)
            .pipe(
                finalize(() => {
                    this.busy$.next(false);
                })
            );
    }

}
