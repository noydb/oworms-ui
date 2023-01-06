import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { combineLatest, Observable, of, Subscription } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';

import { TagService } from '../../../service/tag.service';

import { FilterUtil } from '../../../util/filter.util';
import { Unsubscribes } from '../../../util/auto-unsubscribe.directive';

import { SelectOption } from '../../../model/select-option.interface';
import { WordFilter } from '../../../model/word-filter.interface';

@Component({
    selector: 'ow-filter-modal',
    templateUrl: 'filter-modal.component.html',
    styleUrls: ['./filter-modal.component.scss']
})
@Unsubscribes()
export class FilterModalComponent {

    @Output()
    readonly modalClosed: EventEmitter<void> = new EventEmitter<void>();

    selectedPos: SelectOption[] = [];
    selectedTags: SelectOption[] = [];
    form: FormGroup = new FormGroup<unknown>({
        word: new FormControl<string>(''),
        definition: new FormControl<string>(''),
        origin: new FormControl<string>(''),
        example: new FormControl<string>(''),
        note: new FormControl<string>('')
    });
    // TODO: get parts of speech from service so counts can be displayed. need to get counts for tags as well
    readonly posOptions: SelectOption[] = FilterUtil.getPartOfSpeechDropdownItems();
    readonly tagOptions$: Observable<SelectOption[]>;

    constructor(private readonly tagService: TagService,
                private readonly router: Router,
                private readonly route: ActivatedRoute) {
        this.tagOptions$ = this.tagService.getTagSelectOptions();
        this.getQueryParams();
    }

    get noValues(): boolean {
        const { word, definition, origin, example, note } = this.form.value;

        return this.isBlank(word) && (!this.selectedPos || this.selectedPos.length === 0) &&
            this.isBlank(definition) && this.isBlank(origin) && this.isBlank(example) &&
            (!this.selectedTags || this.selectedTags.length === 0) && this.isBlank(note);
    }

    filter(): void {
        const queryParams: QueryParamFilters = {};

        const { word, definition, origin, example, note } = this.form.value;

        // must align with query params in words.component.ts#getWords. try align them/make stricter

        if (!this.isBlank(word)) {
            queryParams.word = word;
        }

        if (this.selectedPos?.length > 0) {
            queryParams.pos = this.selectedPos.map(({ titleLabel }: SelectOption) => titleLabel.toLowerCase()).join(',');
        }

        if (!this.isBlank(definition)) {
            queryParams.definition = definition;
        }

        if (!this.isBlank(origin)) {
            queryParams.origin = origin;
        }

        if (!this.isBlank(example)) {
            queryParams.example = example;
        }

        if (this.selectedTags?.length > 0) {
            queryParams.tags = this.selectedTags.map(({ titleLabel }: SelectOption) => titleLabel.toLowerCase()).join(',');
        }

        if (!this.isBlank(note)) {
            queryParams.note = note;
        }

        void this.router.navigate([], { relativeTo: this.route, queryParams });
        this.modalClosed.emit();
    }

    selectPartOfSpeech($event: SelectOption[]): void {
        this.selectedPos = $event;
    }

    selectTags($event: SelectOption[]): void {
        this.selectedTags = $event;
    }

    cancel(): void {
        this.modalClosed.emit();
    }

    private getQueryParams(): Subscription {
        return this.route
            .queryParamMap
            .pipe(
                take(1),
                map((qParamsMap: ParamMap) => {
                    return {
                        word: qParamsMap.get('word'),
                        partsOfSpeech: qParamsMap.getAll('pos'),
                        definition: qParamsMap.get('definition'),
                        origin: qParamsMap.get('origin'),
                        example: qParamsMap.get('example'),
                        note: qParamsMap.get('note'),
                        tags: qParamsMap.getAll('tags')
                    } as WordFilter;
                }),
                tap(({ word, definition, origin, example, note, partsOfSpeech }: WordFilter) => {
                    this.form = new FormGroup({
                        word: new FormControl(word),
                        definition: new FormControl(definition),
                        origin: new FormControl(origin),
                        example: new FormControl(example),
                        note: new FormControl(note)
                    });
                    this.setSelectedPos(partsOfSpeech);
                }),
                map(({ tags }: WordFilter) => tags),
                filter((tags: string[]) => !!tags && tags.length > 0),
                switchMap((tags: string[]) => combineLatest([
                    of(tags[0].split(',')), // getAll returns all tags in 0 indexed element
                    this.tagOptions$
                ])),
                tap(([selectedTags, allTags]: [string[], SelectOption[]]) => {
                    for (const selectedTag of selectedTags) {
                        const match: SelectOption = allTags.find(({ titleLabel }: SelectOption) =>
                            selectedTag.toLowerCase().trim() === titleLabel.toLowerCase().trim()
                        );

                        if (match) {
                            this.selectedTags.push({ ...match, selected: true });
                        }
                    }

                    this.selectedTags = [...this.selectedTags];
                })
            )
            .subscribe();
    }

    private setSelectedPos(partsOfSpeech: string[]): void {
        if (!partsOfSpeech || partsOfSpeech.length === 0) {
            return;
        }

        const pos: string[] = partsOfSpeech[0]?.split(',');

        for (let pOfSpeech of pos) {
            for (let posOption of this.posOptions) {
                if (posOption.label.toLowerCase() === pOfSpeech) {
                    this.selectedPos.push({ ...posOption, selected: true });
                }
            }
        }
    }

    private isBlank(arg: string): boolean {
        return !arg || arg.trim() === '';
    }
}

interface QueryParamFilters {
    word?: string;
    pos?: string;
    definition?: string;
    origin?: string;
    example?: string;
    tags?: string;
    note?: string;
}
