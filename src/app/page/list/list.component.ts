import { Component, OnDestroy, OnInit } from '@angular/core';
import { WordService } from '../../service/word.service';
import { Word } from '../../model/word/word.interface';
import { Observable, of, Subscription } from 'rxjs';
import { SubscriptionUtil } from '../../util/subscription.util';

@Component({
	selector: 'ow-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

	words$: Observable<Word[]> = of([]);

	private readonly subscriptions: Subscription[] = [];

	constructor(private readonly wordService: WordService) {
	}

	ngOnInit(): void {
		this.words$ = this.wordService.retrieveAll();
	}

	ngOnDestroy(): void {
		SubscriptionUtil.unsubscribe(this.subscriptions);
	}
}
