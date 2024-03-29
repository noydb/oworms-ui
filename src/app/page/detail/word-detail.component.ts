import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AppRoutes } from '../../util/app.routes';

import { AlertService } from '../../service/alert.service';
import { WordService } from '../../service/word.service';

import { ErrorUtil } from '../../util/error.util';

import { ComponentState } from '../../model/component-state.enum';
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
                private readonly titleService: Title,
                private readonly alertService: AlertService,
                private readonly meta: Meta) {
        super();

        this.word$ = this.getWord();
    }

    navToStats(word: Word): void {
        const date: Date = new Date(word.creationDate);

        void this.router.navigate(
            [AppRoutes.STATS],
            { queryParams: { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() } }
        );
    }

    edit({ uuid }: Word): void {
        void this.router.navigate([AppRoutes.getEdit(uuid)]);
    }

    private getWord(): Observable<Word> {
        this.state = ComponentState.LOADING;

        // can't take(1) because random word needs to
        // refresh the page if you click random over and
        // over
        return this.route
            .paramMap
            .pipe(
                map((params: ParamMap) => params.get('uuid') ?? '0'),
                switchMap((uuid: string) => this.service.retrieve(uuid)),
                tap((word: Word) => {
                    this.tags = word.tags.map(({ name }: Tag) => name);
                    this.updateMetaInfo(word);
                    this.state = ComponentState.COMPLETE;
                }),
                catchError((e: HttpErrorResponse) => {
                    this.errorMessage = ErrorUtil.getMessage(e);
                    this.alertService.add('Failed to find word: ' + this.errorMessage, true);
                    this.state = ComponentState.ERROR;

                    return of(undefined);
                })
            );
    }

    private updateMetaInfo(word: Word): void {
        this.titleService.setTitle(`${word.theWord} - ${word.partOfSpeech} - oworms`);
        this.meta.updateTag({
            name: 'og:title',
            content: `${word.theWord} - ${word.partOfSpeech}`
        });
        this.meta.updateTag({
            name: 'twitter:title',
            content: `${word.theWord} - ${word.partOfSpeech}`
        });
        this.meta.updateTag({
            name: 'description',
            content: `${word.theWord} - ${word.partOfSpeech}: ${word.definition}`
        });
        this.meta.updateTag({
            name: 'og:description',
            content: `${word.theWord} - ${word.partOfSpeech}: ${word.definition}`
        });
        this.meta.updateTag({
            name: 'twitter:description',
            content: `${word.theWord} - ${word.partOfSpeech}: ${word.definition}`
        });
    }
}
