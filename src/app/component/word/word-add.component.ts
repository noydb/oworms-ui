import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { WordService } from '../../service/word.service';

import { SubscriptionUtil } from '../../util/subscription.util';

import { Word } from '../../model/word.interface';

@Component({
    selector: 'ow-word-add',
    templateUrl: 'word-add.component.html'
})
export class WordAddComponent implements OnDestroy {

    private readonly subs: Subscription[] = [];

    constructor(private readonly service: WordService, private readonly router: Router) {
    }

    ngOnDestroy(): void {
        SubscriptionUtil.unsubscribe(this.subs);
    }

    createWord(word: Word): void {
        this.subs.push(
            this.service
            .create(word)
            .subscribe(() => {
                alert('word created');

                this.router.navigate(['/worms/all'], {
                    queryParamsHandling: 'preserve'
                });
            }, (e) => {
                console.error(e);

                alert(e.message);
            })
        );
    }
}
