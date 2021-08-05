import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { FilterUtil } from '../../../util/filter.util';
import { SubscriptionUtil } from '../../../util/subscription.util';

import { DropdownItem } from '../../../model/dropdown-item.interface';
import { PartOfSpeech } from '../../../model/part-of-speech.enum';
import { Word } from '../../../model/word.interface';

@Component({
    selector: 'ow-word-form',
    templateUrl: './word-form.component.html',
    styleUrls: ['./word-form.component.scss']
})
export class WordFormComponent implements OnInit, OnDestroy {

    @Input()
    title: string = 'Add New Word';

    @Input()
    word: Word = {
        theWord: '',
        definition: '',
        pronunciation: '',
        origin: '',
        exampleUsage: '',
        partOfSpeech: PartOfSpeech.ADJECTIVE
    };

    @Input()
    buttonText: string = 'Create Word';

    @Input()
    viewOnly: boolean = false;

    @Output()
    btnEvent: EventEmitter<Word> = new EventEmitter<Word>();

    form: FormGroup;
    partsOfSpeechDropdownItems: DropdownItem<PartOfSpeech>[] = FilterUtil.getPartOfSpeechDropdownItems();

    // store as array to cater for dropdown. will fix.
    partOfSpeech: PartOfSpeech[] = [];

    private readonly subs: Subscription[] = [];

    constructor() {
        this.form = new FormGroup({
            word: new FormControl('', [Validators.required]),
            definition: new FormControl('', [Validators.required]),
            pronunciation: new FormControl(),
            origin: new FormControl(),
            exampleUsage: new FormControl()
        });
    }

    ngOnInit(): void {
        this.injectValuesIntoForm();

        if (this.viewOnly) {
            this.form.disable();
        }
    }

    ngOnDestroy(): void {
        SubscriptionUtil.unsubscribe(this.subs);
    }

    onButtonClicked(): void {
        const word: Word = {
            theWord: this.getFormVal('word'),
            definition: this.getFormVal('definition'),
            partOfSpeech: this.partOfSpeech[0],
            pronunciation: this.getFormVal('pronunciation'),
            origin: this.getFormVal('origin'),
            exampleUsage: this.getFormVal('exampleUsage'),
        };

        this.btnEvent.emit(word);
    }

    selectPartOfSpeech($event: PartOfSpeech[]): void {
        this.partOfSpeech = $event && $event.length > 0 ? $event : [];
    }

    private getFormVal(path: string): string | undefined {
        return this.form.get(path)?.value;
    }

    private injectValuesIntoForm(): void {
        this.form = new FormGroup({
            word: new FormControl(this.word?.theWord, [Validators.required]),
            definition: new FormControl(this.word?.definition, [Validators.required]),
            pronunciation: new FormControl(this.word?.pronunciation),
            origin: new FormControl(this.word?.origin),
            exampleUsage: new FormControl(this.word?.exampleUsage)
        });

        this.partOfSpeech = this.word?.partOfSpeech ? [this.word.partOfSpeech] : [];
    }

    get disabled(): boolean {
        return this.form.invalid || !this.partOfSpeech;
    }
}
