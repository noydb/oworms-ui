import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { WordService } from '../../../service/word.service';

import { SubscriptionUtil } from '../../../util/subscription.util';

import { Word } from '../../../model/word.interface';

@Component({
    selector: 'ow-word-detail',
    templateUrl: 'word-detail.component.html',
    styleUrls: ['./word-detail.component.scss']
})
export class WordDetailComponent implements OnInit, OnDestroy {

    word: Word | undefined;
    private theWord: string = '';
    private readonly subs: Subscription[] = [];

    constructor(private readonly route: ActivatedRoute, private readonly service: WordService, private readonly router: Router) {
    }

    ngOnInit(): void {
        this.subs.push(this.getWord());
    }

    ngOnDestroy(): void {
        SubscriptionUtil.unsubscribe(this.subs);
    }

    private getWord(): Subscription {
        return this.route.paramMap
        .pipe(
            map((params: ParamMap) => params.get('id') ?? '0'),
            switchMap((id: string) => this.service.retrieve(Number(id))),
        ).subscribe((word: Word) => {
            if (word) {
                this.word = word;
                this.theWord = word.theWord ?? 'word-not-found';
            }
        });
    }

    update(word: Word): void {
        this.subs.push(
            this.service
            .update(this.theWord, word)
            .subscribe(() => {
                alert('word updated');

                this.router.navigate(['/ui/worms/all'], {
                    queryParamsHandling: 'preserve'
                });
            }, (e) => {
                console.error(e);

                alert(e.message);
            })
        );
    }
}
