import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AppRoutes } from '../../util/app.routes';

import { WordService } from '../../service/word.service';

import { ErrorUtil } from '../../util/error.util';

import { Tag } from '../../model/tag.interface';
import { Word } from '../../model/word.interface';

import { LoadComponent } from '../../component/common/spinner/load.component';

@Component({
    selector: 'ow-word-detail',
    templateUrl: 'word-detail.component.html',
    styleUrls: ['./word-detail.component.scss']
})
export class WordDetailComponent extends LoadComponent {

    readonly word$: Observable<Word>;
    tags: string[] = [];

    constructor(private readonly service: WordService,
                private readonly router: Router,
                private readonly route: ActivatedRoute,
                private readonly titleService: Title) {
        super();

        this.word$ = this.getWord();
    }

    navToStats(word: Word): void {
        const date: Date = new Date(word.creationDate);

        void this.router.navigate(
            ['o/worms/stats'],
            { queryParams: { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() } }
        );
    }

    edit({ uuid }: Word): void {
        void this.router.navigate([AppRoutes.getEdit(uuid)]);
    }

    private getWord(): Observable<Word> {
        this.state = 'loading';

        return this.route
            .paramMap
            .pipe(
                map((params: ParamMap) => params.get('uuid') ?? '0'),
                switchMap((uuid: string) => this.service.retrieve(uuid)),
                tap((word: Word) => {
                    this.tags = word.tags.map(({ name }: Tag) => name);
                    this.state = 'complete';
                    this.titleService.setTitle(`${word.theWord} - oworms`);
                }),
                catchError((e: HttpErrorResponse) => {
                    this.errorMessage = ErrorUtil.getMessage(e);
                    this.state = 'error';

                    return of(undefined);
                })
            );
    }
}
