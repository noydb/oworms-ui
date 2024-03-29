import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
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

    readonly ctrl: FormControl = new FormControl<string>('');
    readonly wordCount$: Observable<number>;

    constructor(private readonly tagService: TagService,
                private readonly route: ActivatedRoute,
                private readonly router: Router,
                private readonly wordService: WordService) {
        this.wordCount$ = this.wordService.getCount();
        this.getQueryParams();
        this.quickSearchFilter();
    }

    get showField(): boolean {
        return window.innerWidth > 600;
    }

    filter(): void {
        this.showModal = false;
    }

    clearFilters(): void {
        void this.router.navigate([], { relativeTo: this.route, queryParams: { size: 25 } });
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
            distinctUntilChanged(),
            debounceTime(1500),
            tap((value: string) => {
                if (!value || !value.trim()) {
                    void this.router.navigate(
                        [],
                        { relativeTo: this.route, queryParams: { size: 25 } }
                    );
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
