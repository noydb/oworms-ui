import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { WordService } from '../../../service/word.service';

import { Word } from '../../../model/word.interface';
import { WordFilter } from '../../../model/word-filter.interface';

import { LoadComponent } from '../../common/spinner/load.component';

@Component({
    selector: 'ow-words',
    templateUrl: './words.component.html',
    styleUrls: ['./words.component.scss']
})
export class WordsComponent extends LoadComponent implements OnDestroy {

    words$: Observable<Word[]>;
    wordsToShow: number = 25;
    increment: number = 6;
    wordFilter: WordFilter;

    constructor(private readonly wordService: WordService,
                private readonly route: ActivatedRoute,
                private readonly router: Router,
                private readonly titleService: Title) {
        super();

        this.titleService.setTitle('oworms | all');
        this.words$ = this.getWords();
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

    reloadWords(): void {
        this.words$ = this.getWords();
    }

    private getWords(): Observable<Word[]> {
        return this.route.queryParamMap
        .pipe(
            map((qParamsMap: ParamMap) => {
                return {
                    word: qParamsMap.get('word'),
                    partsOfSpeech: qParamsMap.getAll('pos'),
                    definition: qParamsMap.get('def'),
                    origin: qParamsMap.get('ori'),
                    exampleUsage: qParamsMap.get('ex'),
                    tags: qParamsMap.getAll('tags'),
                    note: qParamsMap.get('note')
                } as WordFilter;
            }),
            tap((wordFilter: WordFilter) => {
                this.wordFilter = wordFilter;
            }),
            switchMap((wordFilter: WordFilter) => this.wordService.retrieveAll(wordFilter)),
            tap((words: Word[]) => {
                this.wordsToShow = words.length < 25 ? words.length : 25;
            }),
            catchError((e: any) => {
                console.error(e);

                this.state = 'error';
                this.errorMessage = e.error.message;

                return of(undefined);
            })
        );
    }
}
