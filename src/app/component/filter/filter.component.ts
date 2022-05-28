import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TagService } from '../../service/tag.service';
import { WordService } from '../../service/word.service';

import { FilterUtil } from '../../util/filter.util';

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

                this.existingFilters = FilterUtil.getFilterLabels(qParamsMap);
            }),
        ).subscribe();
    }
}
