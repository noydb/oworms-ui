import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { WordService } from '../../service/word.service';

import { SubscriptionUtil } from '../../util/subscription.util';

import { Word } from '../../model/word.interface';
import { WordFilter } from '../../model/word-filter.interface';

@Component({
    selector: 'ow-words',
    templateUrl: './words.component.html',
    styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit, OnDestroy {

    words: Word[] = [];
    selectedWord: Word = {};
    numberOfElements: number = 50;
    private readonly subs: Subscription[] = [];
    existingFilter: WordFilter | undefined;

    constructor(private readonly wordService: WordService,
                private readonly route: ActivatedRoute,
                private readonly router: Router) {
    }

    ngOnInit(): void {
        this.subs.push(this.loadWords());
    }

    ngOnDestroy(): void {
        SubscriptionUtil.unsubscribe(this.subs);

        this.router.navigate(
            [],
            {
                relativeTo: this.route,
                queryParams: {
                    u: this.wordService.getUsername()
                }
            }
        );
    }

    showMore(): void {
        this.numberOfElements += 25;
    }

    selectWord(word: Word): void {
        this.selectedWord = word;
    }

    updateQueryParams($event: Params): void {
        this.router.navigate(
            [],
            {
                relativeTo: this.route,
                queryParams: {
                    ...$event,
                    u: this.wordService.getUsername()
                },
                // queryParamsHandling: 'merge', // remove to replace all query params by provided
            }
        );
    }

    private loadWords(): Subscription {
        return this.route.queryParamMap
        .pipe(
            map((qParamsMap: ParamMap) => {
                return {
                    theWord: qParamsMap.get('w'),
                    definition: qParamsMap.get('def'),
                    partsOfSpeech: qParamsMap.getAll('pos'),
                    createdBy: qParamsMap.get('creator'),
                    haveLearnt: qParamsMap.get('learnt')
                };
            }),
            tap((wordFilter: WordFilter) => {
                this.existingFilter = wordFilter;
            }),
            switchMap((wordFilter: WordFilter) => this.wordService.retrieveAll(wordFilter))
        ).subscribe((words: Word[]) => {
            this.words = words;

            this.numberOfElements = this.words.length < 25 ? this.words.length : 25;
        });
    }
}
