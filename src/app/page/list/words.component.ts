import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { distinctUntilChanged, of } from 'rxjs';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';

import { UserService } from '../../service/user.service';
import { WordService } from '../../service/word.service';

import { AppRoutes } from '../../util/app.routes';
import { ErrorUtil } from '../../util/error.util';
import { FilterUtil } from '../../util/filter.util';

import { ComponentState } from '../../model/component-state.enum';
import { User } from '../../model/user.interface';
import { Word } from '../../model/word.interface';
import { WordFilter } from '../../model/word-filter.interface';

import { LoadComponent } from '../../component/common/spinner/load.component';

@Component({
    selector: 'ow-words',
    templateUrl: './words.component.html',
    styleUrls: ['./words.component.scss']
})
export class WordsComponent extends LoadComponent {

    words: Word[];
    increment: number = 6;
    wordFilter: WordFilter;
    user: User;
    wordsToShow: number;
    readonly ERROR = ComponentState.ERROR;

    constructor(private readonly wordService: WordService,
                private readonly route: ActivatedRoute,
                private readonly router: Router,
                readonly userService: UserService) {
        super();

        this.getUser();
        this.getWords();
        this.getNoOfWordsToShow();
    }

    ngOnDestroy(): void {
        void this.router.navigate([], { relativeTo: this.route, queryParams: {} });
    }

    showAll(): void {
        this.route
            .queryParams
            .pipe(
                take(1),
                map((params: ParamMap) => ({ ...params, size: 2000 })),
                take(1)
            )
            .subscribe({
                next: (queryParams: WordFilter) => {
                    void this.router.navigate([], { relativeTo: this.route, queryParams });
                }
            });
    }

    showMoreOrLess(showMore: boolean): void {
        this.route
        .queryParams
        .pipe(
            take(1),
            map((params: ParamMap) => {
                const currentSize: number = Number(params['size']);
                const size = showMore ? this.increment + currentSize : currentSize - this.increment;

                return { ...params, size };
            }),
            take(1)
        )
        .subscribe({
            next: (queryParams: WordFilter) => {
                void this.router.navigate([], { relativeTo: this.route, queryParams });
            }
        });
    }

    private getWords(): void {
        let filtering: boolean = false;

        this.route
        .queryParamMap
        .pipe(
            distinctUntilChanged(),
            map((qParamsMap: ParamMap) => {
                this.state = ComponentState.LOADING;
                filtering = FilterUtil.getFilterLabels(qParamsMap).length > 0;
                const size: number = Number(qParamsMap.get('size'));

                return {
                    word: qParamsMap.get('word'),
                    partsOfSpeech: qParamsMap.getAll('pos'),
                    definition: qParamsMap.get('definition'),
                    origin: qParamsMap.get('origin'),
                    example: qParamsMap.get('example'),
                    tags: qParamsMap.getAll('tags'),
                    note: qParamsMap.get('note'),
                    size: isNaN(size) ? 25 : size
                } as WordFilter;
            }),
            tap((wordFilter: WordFilter) => {
                this.wordFilter = wordFilter;
            }),
            switchMap((wordFilter: WordFilter) =>
                this.wordService
                .retrieveAll(wordFilter)
                .pipe(
                    catchError((e: HttpErrorResponse) => {
                        this.errorMessage = ErrorUtil.getMessage(e);
                        this.state = ComponentState.ERROR;
                        this.words = [];

                        return of([]);
                    })
                )
            )
        )
        .subscribe({
            next: (words: Word[]) => {
                if (words.length === 1 && filtering) {
                    void this.router.navigate([AppRoutes.getDetail(words[0].uuid)]);
                }

                this.words = words;
                this.state = ComponentState.COMPLETE;
            }
        });
    }

    private getUser(): void {
        this.userService
        .getLoggedInUser()
        .pipe(
            filter((user: User) => !!user)
        )
        .subscribe({
            next: (user: User) => {
                this.user = user;
            }
        });
    }

    private getNoOfWordsToShow(): void {
        this.route
            .queryParams
            .pipe(
                distinctUntilChanged(),
                map((params: Params) => params['size']),
                map((size: string) => Number(size)),
                map((size: number) => isNaN(size) ? 25 : size)
            )
            .subscribe({
                next: (size: number) => {
                    this.wordsToShow  = size;
                    void this.router.navigate(
                        [],
                        { relativeTo: this.route, queryParams: { size }, queryParamsHandling: 'merge' }
                    );
                }
            });
    }
}
