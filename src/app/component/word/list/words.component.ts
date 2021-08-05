import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { WordService } from '../../../service/word.service';

import { SubscriptionUtil } from '../../../util/subscription.util';

import { AppRoutes } from '../../../util/app.routes';

import { Word } from '../../../model/word.interface';
import { WordFilter } from '../../../model/word-filter.interface';

import { LoadComponent } from '../../common/load.component';

@Component({
    selector: 'ow-words',
    templateUrl: './words.component.html',
    styleUrls: ['./words.component.scss']
})
export class WordsComponent extends LoadComponent implements OnInit, OnDestroy {

    words: Word[] = [];
    selectedWord: Word = {};
    numberOfElements: number = 50;
    private readonly subs: Subscription[] = [];
    existingFilter: WordFilter | undefined;

    constructor(private readonly wordService: WordService,
                private readonly route: ActivatedRoute,
                private readonly router: Router,
                private readonly titleService: Title) {
        super();

        this.titleService.setTitle('oworms | all');
    }

    ngOnInit(): void {
        this.subs.push(this.loadWords(true));
    }

    ngOnDestroy(): void {
        SubscriptionUtil.unsubscribe(this.subs);

        this.router.navigate(
            [],
            {
                relativeTo: this.route,
                queryParams: {}
            }
        );
    }

    showMore(): void {
        this.numberOfElements += 25;
    }

    showAll(): void {
        this.numberOfElements = this.words.length;
    }

    viewWordDetails(word: Word): void {
        this.router.navigate([`${AppRoutes.BASE}/${word.id}`]);

        this.selectedWord = word;
    }

    updateQueryParams($event: Params): void {
        this.router.navigate(
            [],
            {
                relativeTo: this.route,
                queryParams: {
                    ...$event
                }
            }
        );
    }

    private loadWords(initLoad: boolean = false): Subscription {
        this.state = 'loading';

        return this.route.queryParamMap
        .pipe(
            map((qParamsMap: ParamMap) => {
                return {
                    theWord: qParamsMap.get('theWord'),
                    definition: qParamsMap.get('definition'),
                    partsOfSpeech: qParamsMap.getAll('partOfSpeech'),
                    createdBy: qParamsMap.get('createdBy')
                };
            }),
            tap((wordFilter: WordFilter) => {
                if (initLoad) {
                    this.existingFilter = wordFilter;
                }
            }),
            switchMap((wordFilter: WordFilter) => this.wordService.retrieveAll(wordFilter))
        ).subscribe((words: Word[]) => {
            this.words = [...words];
            this.numberOfElements = this.words.length < 25 ? this.words.length : 25;

            this.state = 'complete';
        }, (e) => {
            console.error(e);

            this.state = 'error';
            this.errorMessage = e.error.message;
        });
    }

    reloadWords(): void {
        this.subs.push(this.loadWords());
    }
}
