import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { debounceTime, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TagService } from '../../service/tag.service';
import { WordService } from '../../service/word.service';

import { FilterUtil } from '../../util/filter.util';
import { Unsubscribes } from '../../util/auto-unsubscribe.directive';

import { WordFilter } from '../../model/word-filter.interface';

@Component({
    selector: 'ow-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
@Unsubscribes()
export class FilterComponent {

    @Input()
    wordFilter: WordFilter;

    showModal = false;
    existingFilters: string[] = [];

    @Output()
    readonly showChange: EventEmitter<number> = new EventEmitter<number>();

    readonly ctrl: FormControl = new FormControl<string>('');
    readonly wordCount$: Observable<number> = of(0);

    constructor(private readonly tagService: TagService,
                private readonly route: ActivatedRoute,
                private readonly router: Router,
                private readonly wordService: WordService) {
        this.getQueryParams();
        this.wordCount$ = this.wordService.getCount();
        this.quickSearchFilter();
    }

    get showField(): boolean {
        return window.innerWidth > 600;
    }

    filter(): void {
        this.showModal = false;
    }

    clearFilters(): void {
        void this.router.navigate([], { relativeTo: this.route, queryParams: { numberOfWords: 25 } });
    }

    openFilterModal(): void {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        this.showModal = true;
    }

    private quickSearchFilter(): void {
        this.ctrl
        .valueChanges
        .pipe(
            debounceTime(600),
            tap((value: string) => {
                if (!value || !value.trim()) {
                    void this.router.navigate([], { relativeTo: this.route, queryParamsHandling: 'merge' });
                    return;
                }

                void this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: {
                            word: value
                        },
                        queryParamsHandling: 'merge'
                    }
                );
            })
        )
        .subscribe();
    }

    private getQueryParams(): void {
        this.route
        .queryParamMap
        .pipe(
            tap((qParamsMap: ParamMap) => {
                if (qParamsMap.get('filter')) {
                    this.showModal = true;
                }

                this.existingFilters = FilterUtil.getFilterLabels(qParamsMap);

                this.ctrl.setValue(qParamsMap.get('word'));
            })
        )
        .subscribe();
    }
}
