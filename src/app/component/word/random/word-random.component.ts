import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { WordService } from '../../../service/word.service';

import { SubscriptionUtil } from '../../../util/subscription.util';

import { Word } from '../../../model/word.interface';

import { LoadComponent } from '../../common/load.component';

@Component({
    selector: 'ow-word-detail',
    templateUrl: 'word-random.component.html',
    styleUrls: ['./word-random.component.scss']
})
export class WordRandomComponent extends LoadComponent implements OnInit, OnDestroy {

    word: Word;

    private readonly subs: Subscription[] = [];

    constructor(private readonly service: WordService,
                private readonly titleService: Title) {
        super();

        this.titleService.setTitle('oworms | random');
    }

    ngOnInit(): void {
        this.subs.push(this.loadWord());
    }

    loadWord(): Subscription {
        this.state = 'loading';

        return this.service.retrieveRandom().subscribe((word: Word) => {
            this.word = word;

            this.state = 'complete';
        });
    }

    ngOnDestroy(): void {
        SubscriptionUtil.unsubscribe(this.subs);
    }
}
