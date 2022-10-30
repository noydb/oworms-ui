import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';

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

    showMore(): void {
        this.wordsToShow += this.increment;
    }

    showLess(): void {
        this.wordsToShow -= this.increment;
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

    private getWords(): void {
        this.state = 'loading';
        let filtering: boolean = false;

        this.route
            .queryParamMap
            .pipe(
                map((qParamsMap: ParamMap) => {
                    filtering = FilterUtil.getFilterLabels(qParamsMap).length > 0;

                    return {
                        word: qParamsMap.get('word'),
                        partsOfSpeech: qParamsMap.getAll('pos'),
                        definition: qParamsMap.get('definition'),
                        origin: qParamsMap.get('origin'),
                        exampleUsage: qParamsMap.get('exampleUsage'),
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
                    this.wordsToShow = words.length < 25 ? words.length : 25;
                })
            )
            .subscribe();
    }
}
