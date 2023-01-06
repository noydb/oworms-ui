import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';

import { UserService } from '../../service/user.service';
import { WordService } from '../../service/word.service';

import { AppRoutes } from '../../util/app.routes';
import { ErrorUtil } from '../../util/error.util';
import { FilterUtil } from '../../util/filter.util';

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
    wordsToShow: number = 25;
    increment: number = 6;
    wordFilter: WordFilter;
    user: User;

    constructor(private readonly wordService: WordService,
                private readonly route: ActivatedRoute,
                private readonly router: Router,
                readonly userService: UserService) {
        super();

        void this.router.navigate(
            [],
            { relativeTo: this.route, queryParams: { numberOfWords: this.wordsToShow }, queryParamsHandling: 'merge' }
        );

        this.getUser();
        this.getWords();
    }

    get disableShowLess(): boolean {
        return this.increment > this.wordsToShow;
    }

    ngOnDestroy(): void {
        void this.router.navigate([], { relativeTo: this.route, queryParams: {} });
    }

    chunkChanged($event: number, numberOfWords: number): void {
        // show all was selected
        if ($event === 0) {
            this.wordsToShow = numberOfWords;

            return;
        }

        this.increment = $event;
    }

    showAll(numberOfWords: number): void {
        this.wordsToShow = numberOfWords;
    }

    showMoreOrLess(showMore: boolean): void {
        if (showMore) {
            this.wordsToShow += this.increment;
        } else {
            this.wordsToShow -= this.increment;
        }

        this.route
        .queryParams
        .pipe(
            take(1),
            map((params: ParamMap) => {
                return { ...params, numberOfWords: this.wordsToShow } as WordFilter;
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
        this.state = 'loading';
        let filtering: boolean = false;

        this.route
        .queryParamMap
        .pipe(
            map((qParamsMap: ParamMap) => {
                filtering = FilterUtil.getFilterLabels(qParamsMap).length > 0;

                return {
                    numberOfWords: this.wordsToShow,
                    word: qParamsMap.get('word'),
                    partsOfSpeech: qParamsMap.getAll('pos'),
                    definition: qParamsMap.get('definition'),
                    origin: qParamsMap.get('origin'),
                    example: qParamsMap.get('example'),
                    tags: qParamsMap.getAll('tags'),
                    note: qParamsMap.get('note')
                } as WordFilter;
            }),
            tap((wordFilter: WordFilter) => {
                this.state = 'complete';
                this.wordFilter = wordFilter;
            }),
            switchMap((wordFilter: WordFilter) =>
                this.wordService
                .retrieveAll(wordFilter)
                .pipe(
                    catchError((e: any) => {
                        this.errorMessage = ErrorUtil.getMessage(e);
                        this.state = 'error';
                        this.words = [];

                        return of([]);
                    })
                )
            ),
            tap((words: Word[]) => {
                if (words.length === 1 && filtering) {
                    void this.router.navigate([AppRoutes.getDetail(words[0].uuid)]);
                }

                this.words = words;
            })
        )
        .subscribe();
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
}
