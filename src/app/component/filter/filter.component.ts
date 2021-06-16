import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Params } from '@angular/router';

import { PartOfSpeech } from '../../model/part-of-speech.enum';

@Component({
    selector: 'ow-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

    queryParams: Params = {};
    readonly properties: FilterProp[] = [
        { key: 'w', value: undefined, filterBy: false },
        { key: 'def', value: undefined, filterBy: false },
        { key: 'pos', value: undefined, filterBy: false },
        { key: 'creator', value: undefined, filterBy: false },
        { key: 'learnt', value: undefined, filterBy: false }
    ];
    posFilters: POSFilter[] = [];
    selectedPartOfSpeech: PartOfSpeech | undefined = undefined;

    @Output()
    readonly onFilterChange: EventEmitter<Params> = new EventEmitter<Params>();

    ngOnInit(): void {
        this.posFilters = this.getPOSFilters();
    }

    addFilter(prop: FilterProp): void {
        prop.filterBy = true;

        this.queryParams = {
            ...this.queryParams,
            [prop.key]: prop.value
        };

        this.onFilterChange.emit(this.queryParams);
    }

    removeFilter(prop: FilterProp): void {
        prop.filterBy = false;

        delete this.queryParams[prop.key];

        this.onFilterChange.emit(this.queryParams);
    }

    selectPartOfSpeech($event: PartOfSpeech): void {
        this.selectedPartOfSpeech = $event;

        this.addFilter({
            key: 'pos',
            value: this.selectedPartOfSpeech,
            filterBy: true
        });
    }

    private getPOSFilters(): POSFilter[] {
        const partsOfSpeech: PartOfSpeech[] = Object.values(PartOfSpeech);

        return partsOfSpeech.map((partOfSpeech: PartOfSpeech) => ({
            value: partOfSpeech,
            selected: false
        }));
    }

    updateValue($event: any, prop: FilterProp): void {
        prop.value = $event;
    }
}

interface FilterProp {
    key: 'w' | 'def' | 'pos' | 'creator' | 'learnt';
    filterBy: boolean;
    value?: string;
}

interface POSFilter {
    value: PartOfSpeech;
    selected: boolean;
}
