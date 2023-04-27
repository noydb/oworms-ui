import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { TagService } from '../../../service/tag.service';

import { FilterUtil } from '../../../util/filter.util';
import { PartOfSpeech } from '../../../model/part-of-speech.enum';
import { SelectOption } from '../../../model/select-option.interface';
import { TagUtil } from '../../../util/tag.util';
import { Word } from '../../../model/word.interface';

@Component({
    selector: 'ow-word-form',
    templateUrl: './word-form.component.html',
    styleUrls: ['./word-form.component.scss']
})
export class WordFormComponent implements OnInit {

    @Input()
    title: string = 'Add A Word';

    @Input()
    word: Word = {
        theWord: '',
        definition: '',
        pronunciation: '',
        origin: '',
        exampleUsage: '',
        discoveredAt: '',
        partOfSpeech: undefined,
        tags: undefined
    };

    @Input()
    btnText: string = 'Add Word';

    @Input()
    secondBtnText: string = 'Cancel';

    @Input()
    viewOnly: boolean = false;

    @Output()
    readonly submitForm: EventEmitter<Word> = new EventEmitter<Word>();

    @Output()
    readonly secondBtnClick: EventEmitter<void> = new EventEmitter<void>();

    form: FormGroup = new FormGroup({
        word: new FormControl('', [Validators.required]),
        definition: new FormControl('', [Validators.required]),
        pronunciation: new FormControl(),
        origin: new FormControl(),
        exampleUsage: new FormControl(),
        discoveredAt: new FormControl(),
        note: new FormControl()
    });
    posOptions: SelectOption[] = FilterUtil.getPartOfSpeechDropdownItems();
    selectedPos: SelectOption;
    selectedTags: SelectOption[];

    readonly tagOptions$: Observable<SelectOption[]>;

    constructor(private readonly tagService: TagService) {
        this.tagOptions$ = this.tagService.getTagSelectOptions();
    }

    get disabled(): boolean {
        return this.form.invalid || !this.selectedPos?.value;
    }

    ngOnInit(): void {
        this.injectValuesIntoForm();

        if (this.viewOnly) {
            this.form.disable();
        }
    }

    onBtnClick(cancel?: boolean): void {
        if (cancel) {
            this.form.reset();
            this.secondBtnClick.emit();
            this.selectedPos = undefined;
            this.selectedTags = [];

            return;
        }

        const {
            word: theWord,
            definition,
            pronunciation,
            origin,
            exampleUsage,
            discoveredAt,
            note
        }: any = this.form.value;

        const word: Word = {
            theWord,
            definition,
            partOfSpeech: this.selectedPos.value as PartOfSpeech,
            pronunciation,
            origin,
            exampleUsage,
            discoveredAt,
            note,
            tagIds: this.selectedTags.map(({ value }: SelectOption) => value as number)
        };

        this.submitForm.emit(word);
    }

    selectPartOfSpeech($event: SelectOption): void {
        this.selectedPos = $event;
    }

    selectTags($event: SelectOption[]): void {
        this.selectedTags = $event;
    }

    private injectValuesIntoForm(): void {
        this.form = new FormGroup({
            word: new FormControl(this.word?.theWord, [Validators.required]),
            definition: new FormControl(this.word?.definition, [Validators.required]),
            pronunciation: new FormControl(this.word?.pronunciation),
            origin: new FormControl(this.word?.origin),
            exampleUsage: new FormControl(this.word?.exampleUsage),
            discoveredAt: new FormControl(this.word?.discoveredAt),
            note: new FormControl(this.word?.note)
        });

        if (this.word?.partOfSpeech) {
            this.selectedPos = {
                value: this.word?.partOfSpeech,
                selected: true,
                label: this.word?.partOfSpeech,
                titleLabel: this.word?.partOfSpeech
            };
        }

        this.selectedTags = TagUtil.mapTagsToOptions(this.word.tags, true);
    }
}
