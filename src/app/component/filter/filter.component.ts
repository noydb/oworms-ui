import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TagService } from '../../service/tag.service';
import { WordService } from '../../service/word.service';

import { WordFilter } from '../../model/word-filter.interface';

@Component({
    selector: 'ow-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

    @Input()
    wordFilter: WordFilter;

    showModal = false;
    existingFilters: string[] = [];

    @Output()
    readonly showChange: EventEmitter<number> = new EventEmitter<number>();

    readonly wordCount$: Observable<number>;
    readonly subs: Subscription[] = [];

    constructor(private readonly tagService: TagService,
                private readonly route: ActivatedRoute,
                private readonly router: Router,
                private readonly wordService: WordService) {
        this.subs.push(this.getQueryParams());
        this.wordCount$ = this.wordService.getCount();
    }

    filter(): void {
        this.showModal = false;
    }

    showSelect($event: number): void {
        this.showChange.emit($event);
    }

    clearFilters(): void {
        void this.router.navigate([], { relativeTo: this.route, queryParams: undefined });
    }

    private getQueryParams(): Subscription {
        return this.route.queryParamMap
        .pipe(
            tap((qParamsMap: ParamMap) => {
                if (qParamsMap.get('filter')) {
                    this.showModal = true;
                }

                this.existingFilters = this.getFilterLabels(qParamsMap);
            }),
        ).subscribe();
    }

    private getFilterLabels(qParamsMap: ParamMap): string[] {
        let filters: string[] = [];

        const word: string = qParamsMap.get('word');
        if (!!word?.trim()) {
            filters.push(`Word: ${word}`);
        }

        const partsOfSpeech: string[] = qParamsMap.getAll('pos');
        if (!!partsOfSpeech[0]?.trim()) {
            filters = [...filters, ...partsOfSpeech[0].split(',')];
        }

        const definition: string = qParamsMap.get('def');
        if (!!definition?.trim()) {
            filters.push(`Definition: ${definition}`);
        }

        const origin: string = qParamsMap.get('ori');
        if (!!origin?.trim()) {
            filters.push(`Origin: ${origin}`);
        }

        const example: string = qParamsMap.get('ex');
        if (!!example?.trim()) {
            filters.push(`Example: ${word}`);
        }

        const note: string = qParamsMap.get('note');
        if (!!note?.trim()) {
            filters.push(`Note: ${note}`);
        }

        const tags: string[] = qParamsMap.getAll('tags');
        if (!!tags[0]?.trim()) {
            filters = [...filters, ...tags[0].split(',')];
        }

        return filters;
    }
}
