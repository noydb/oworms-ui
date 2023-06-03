import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UtilService {
    readonly documentClickedTarget: Subject<HTMLElement> = new Subject<HTMLElement>();

    constructor(private readonly http: HttpClient) {
    }

    getApiVersion(): Observable<string> {
        return this.http.get('/api/o/settings/version', { responseType: 'text' });
    }
}
