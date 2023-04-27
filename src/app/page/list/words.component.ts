import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { distinct, distinctUntilChanged, Observable, of } from 'rxjs';
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
    increment: number = 6;
    wordFilter: WordFilter;
    user: User;
    readonly wordsToShow$: Observable<number>;
    // readonly likedWordUUIDs$: Observable<string[]>;

    constructor(private readonly wordService: WordService,
                private readonly route: ActivatedRoute,
                private readonly router: Router,
                readonly userService: UserService) {
        super();

        this.getUser();
        this.getWords();
        this.wordsToShow$ = this.getNoOfWordsToShow();
        // this.likedWordUUIDs$ = this.userService
        //     .loadProfile()
        //     .pipe(
        //         take(1),
        //         switchMap(() => this.userService.getUserProfile()),
        //         distinctUntilChanged(),
        //         map(({likedWords}: UserProfile) => {
        //             console.log(likedWords);
        //             return likedWords.map((word: Word) => word.uuid);
        //         }),
        //     );
    }

    ngOnDestroy(): void {
        void this.router.navigate([], { relativeTo: this.route, queryParams: {} });
    }

    chunkChanged($event: number, numberOfWords: number): void {
        // show all was selected
        if ($event === 0) {
            // this.wordsToShow = numberOfWords;

            return;
        }

        this.increment = $event;
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
        this.state = 'loading';
        let filtering: boolean = false;

        this.route
        .queryParamMap
        .pipe(
            distinctUntilChanged(),
            map((qParamsMap: ParamMap) => {
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

    private getNoOfWordsToShow(): Observable<number> {
        return this.route
            .queryParams
            .pipe(
                take(1),
                map((params: Params) => params['size']),
                map((size: string) => {
                    console.log('wrewerwer');
                    return Number(size);
                }),
                map((size: number) => isNaN(size) ? 25 : size),
                tap((size: number) => {
                    console.log(size);
                    void this.router.navigate(
                        [],
                        { relativeTo: this.route, queryParams: { size }, queryParamsHandling: 'merge' }
                    );
                })
            )
    }
}
