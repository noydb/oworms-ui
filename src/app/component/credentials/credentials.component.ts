import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { LocalStorageService } from '../../service/local-storage.service';

import { Word } from '../../model/word.interface';

@Component({
    selector: 'ow-credentials',
    templateUrl: 'credentials.component.html',
    styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent {

    @Output()
    btnEvent: EventEmitter<Word> = new EventEmitter<Word>();

    form: FormGroup;

    constructor(private readonly lsService: LocalStorageService,
                private readonly titleSerivce: Title) {
        this.form = new FormGroup({
            u: new FormControl(lsService.get('u'), [Validators.required]),
            p: new FormControl(lsService.get('p'), [Validators.required])
        });

        this.titleSerivce.setTitle('oworms | credentials');
    }

    submit(): void {
        this.lsService.set('u', this.form.get('u')?.value);
        this.lsService.set('p', this.form.get('p')?.value);
    }

    get buttonDisabled(): boolean {
        return this.form.invalid;
    }
}
