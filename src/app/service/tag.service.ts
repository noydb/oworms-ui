import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LocalStorageService } from './local-storage.service';

import { TagUtil } from '../util/tag.util';

import { SelectOption } from '../model/select-option.interface';
import { Tag } from '../model/tag.interface';

@Injectable()
export class TagService {

    private readonly baseURL: string = '/api/o';

    constructor(private readonly http: HttpClient, private readonly ls: LocalStorageService) {
    }

    getTags(): Observable<Tag[]> {
        return this.http.get<Tag[]>(`${this.baseURL}/tags`, { params: this.getCredentialHttpParams() });
    }

    getTagSelectOptions(): Observable<SelectOption[]> {
        return this
        .getTags()
        .pipe(
            map((tags: Tag[]) => TagUtil.mapTagsToOptions(tags))
        );
    }

    private getCredentialHttpParams(): HttpParams {
        let params: HttpParams = new HttpParams();
        params = params.set('u', this.ls.get('u'));
        params = params.set('permission_key', this.ls.get('p'));

        return params;
    }
}
