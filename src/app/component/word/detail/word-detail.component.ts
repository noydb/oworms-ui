import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AppRoutes } from '../../../util/app.routes';

import { WordService } from '../../../service/word.service';

import { ErrorUtil } from '../../../util/error.util';

import { Tag } from '../../../model/tag.interface';
import { Word } from '../../../model/word.interface';

import { LoadComponent } from '../../common/spinner/load.component';

@Component({
    selector: 'ow-word-detail',
    templateUrl: 'word-detail.component.html',
    styleUrls: ['./word-detail.component.scss']
})
export class WordDetailComponent extends LoadComponent {

    word$: Observable<Word>;
    tags: string[] = [];

    constructor(private readonly service: WordService,
                private readonly router: Router,
                private readonly route: ActivatedRoute,
                private readonly titleService: Title) {
        super();

        this.titleService.setTitle('oworms | detail');
        this.word$ = this.getWord();
    }

    edit({ id }: Word): void {
        void this.router.navigate([AppRoutes.getEdit(id)]);
    }

    private getWord(): Observable<Word> {
        this.state = 'loading';

        return this.route.paramMap
        .pipe(
            map((params: ParamMap) => params.get('id') ?? '0'),
            switchMap((id: string) => this.service.retrieve(Number(id))),
            tap((word: Word) => {
                this.tags = word.tags.map(({ name }: Tag) => name);
                this.state = 'complete';
            }),
            catchError((e: HttpErrorResponse) => {
                console.error(e);
                this.errorMessage = ErrorUtil.getMessage(e);
                this.state = 'error';

                return of(undefined);
            })
        );
    }
}
