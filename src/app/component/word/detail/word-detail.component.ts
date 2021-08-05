import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { WordService } from '../../../service/word.service';

import { SubscriptionUtil } from '../../../util/subscription.util';

import { AppRoutes } from '../../../util/app.routes';

import { Word } from '../../../model/word.interface';

import { LoadComponent } from '../../common/load.component';

@Component({
	selector: 'ow-word-detail',
	templateUrl: 'word-detail.component.html',
	styleUrls: ['./word-detail.component.scss']
})
export class WordDetailComponent extends LoadComponent implements OnInit, OnDestroy {

	word: Word = undefined;
	private theWord: string = '';
	private readonly subs: Subscription[] = [];

	constructor(private readonly route: ActivatedRoute,
				private readonly service: WordService,
				private readonly router: Router,
				private readonly titleService: Title) {
		super();

		this.titleService.setTitle('oworms | view');
	}

	ngOnInit(): void {
		this.subs.push(this.getWord());
	}

	ngOnDestroy(): void {
		SubscriptionUtil.unsubscribe(this.subs);
	}

	private getWord(): Subscription {
		this.state = 'loading';

		return this.route.paramMap
		.pipe(
			map((params: ParamMap) => params.get('id') ?? '0'),
			switchMap((id: string) => this.service.retrieve(Number(id))),
		).subscribe((word: Word) => {
			if (word) {
				this.word = { ...word };
				this.theWord = word.theWord ?? 'word-not-found';
			}

			this.state = 'complete';
		}, (e) => {
			this.state = 'error';
			this.errorMessage = e.error.message;
		});
	}

	update(word: Word): void {
		this.subs.push(
			this.service
			.update(this.word.id, word)
			.subscribe(() => {
				alert('word updated');

				this.router.navigate([AppRoutes.LIST]);
			}, (e) => {
				console.error(e);

				alert(e.error.message);
			})
		);
	}

	get formTitle(): string {
		switch (this.state) {
			case 'loading':
				return 'Details for Loading...';
			case 'error':
				return 'Error (see below for more details)';
			case 'complete':
				return `Details for ${this.word.theWord}`;
		}
	}
}
