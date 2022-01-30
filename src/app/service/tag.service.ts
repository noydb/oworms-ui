import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TagUtil } from '../util/tag.util';

import { SelectOption } from '../model/select-option.interface';
import { Tag } from '../model/tag.interface';

@Injectable()
export class TagService {

    private readonly baseURL: string = '/api/o';

    constructor(private readonly http: HttpClient) {
    }

    getTags(): Observable<Tag[]> {
        return this.http.get<Tag[]>(`${this.baseURL}/tags`);
    }

    getTagSelectOptions(): Observable<SelectOption[]> {
        return this
        .getTags()
        .pipe(
            map((tags: Tag[]) => TagUtil.mapTagsToOptions(tags))
        );
    }
}
