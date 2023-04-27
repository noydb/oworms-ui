import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LocalStorageService } from './local-storage.service';

import { User } from '../model/user.interface';

@Injectable()
export class UserHttpService {

    private readonly baseURL: string = '/api/o/users';

    constructor(private readonly http: HttpClient, private readonly ls: LocalStorageService) {
    }

    retrieve(u?: string, bna?: string): Observable<User> {
        let params: HttpParams = new HttpParams();

        if (!u?.trim || !bna?.trim()) {
            params = this.getBnaParams();
        } else {
            params = params.set('u', u).set('bna', bna);
        }

        return this.http.get<User>(this.baseURL, { params });
    }

    update(user: User): Observable<User> {
        return this.http.put<User>(
            `${this.baseURL}/${user.uuid}`,
            user,
            { params: this.getBnaParams() }
        );
    }

    likeWord(wordUUID: string): Observable<void> {
        return this.http.patch<void>(
            `${this.baseURL}/word/${wordUUID}/like`,
            undefined,
            { params: this.getBnaParams() }
        );
    }

    private getBnaParams(): HttpParams {
        return new HttpParams().set('u', this.ls.get('u')).set('bna', this.ls.get('bna'));
    }

    login(u: string, bna: string): Observable<void> {
        return this.http.post<void>(this.baseURL + '/login', { u, bna });
    }
}
