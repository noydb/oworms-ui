import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Params } from '@angular/router';

import { FilterUtil } from '../../util/filter.util';

import { DropdownItem } from '../../model/dropdown-item.interface';
import { FilterProp } from '../../model/filter-prop.interface';
import { PartOfSpeech } from '../../model/part-of-speech.enum';
import { WordFilter } from '../../model/word-filter.interface';

@Component({
    selector: 'ow-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnChanges {

    @Input()
    existingFilter: WordFilter | undefined;

    queryParams: Params = {};
    properties: FilterProp[] = FilterUtil.getFreshProps();
    partsOfSpeechDropdownItems: DropdownItem<PartOfSpeech>[] = FilterUtil.getPartOfSpeechDropdownItems();
    partsOfSpeechToFilterBy: PartOfSpeech[] = [];

    @Output()
    readonly filterChange: EventEmitter<Params> = new EventEmitter<Params>();
    readonly form: FormGroup = new FormGroup({
        theWord: new FormControl(),
        definition: new FormControl(),
        createdBy: new FormControl()
    });

    ngOnChanges(): void {
        if (!this.existingFilter) {
            return;
        }

        const { theWord, definition, partsOfSpeech, createdBy, haveLearnt } = this.existingFilter;

        const hasAFilter = !!theWord || !!definition || !!partsOfSpeech || !!createdBy || !!haveLearnt;
        if (hasAFilter) {
            this.setExistingFilters();
        }
    }

    private setExistingFilters(): void {
        const updatedProps: FilterProp[] = this.properties.map((property) => {

            // why is optional chaining needed here? existingFilter cannot be undefined (see if check in on changes)
            switch (property.key) {
                case 'theWord':
                    property.value = this.existingFilter?.theWord;
                    break;
                case 'definition':
                    property.value = this.existingFilter?.definition;
                    break;
                case 'createdBy':
                    property.value = this.existingFilter?.createdBy;
                    break;
            }

            return property;
        });

        const partsOfSpeech = this.existingFilter?.partsOfSpeech;
        if (!!partsOfSpeech) {
            this.partsOfSpeechToFilterBy = partsOfSpeech.map((pos: string) => pos as PartOfSpeech);
        }

        this.properties = [...updatedProps];
    }

    addFilter(prop: FilterProp): void {
        prop.filterBy = true;

        this.queryParams = {
            ...this.queryParams,
            [prop.key]: prop.value
        };

        this.filterChange.emit(this.queryParams);
    }

    removeFilter(prop: FilterProp): void {
        prop.filterBy = false;
        prop.value = '';

        delete this.queryParams[prop.key];

        this.filterChange.emit(this.queryParams);
    }

    selectPartOfSpeech($event: PartOfSpeech[]): void {
        this.partsOfSpeechToFilterBy = $event;

        const partOfSpeechFilterProp: FilterProp = {
            key: 'partOfSpeech',
            pHolder: 'part of speech',
            value: this.partsOfSpeechToFilterBy,
            filterBy: false
        };
        this.addFilter(partOfSpeechFilterProp);
    }

    updateValue($event: any, prop: FilterProp): void {
        prop.value = $event;
    }

    clearFilters(): void {
        this.properties.forEach((prop: FilterProp) => {
            this.removeFilter(prop);
        });

        this.partsOfSpeechToFilterBy = [];
        this.removeFilter({
            key: 'partOfSpeech',
            value: undefined,
            filterBy: false,
            pHolder: ''
        });
    }
}
