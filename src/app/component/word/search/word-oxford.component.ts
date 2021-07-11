import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { WordService } from '../../../service/word.service';

@Component({
    selector: 'ow-word-detail',
    templateUrl: 'word-oxford.component.html',
    styleUrls: ['./word-oxford.component.scss']
})
export class WordOxfordComponent {

    wordDetailsJSON$: Observable<string> = of();
    readonly form: FormGroup = new FormGroup({
        theWord: new FormControl()
    });

    constructor(private readonly service: WordService) {
    }

    searchClick(): void {
        const searchValue: string = this.form.get('theWord')?.value;

        if (!searchValue) {
            return;
        }

        this.wordDetailsJSON$ = this.service.retrieveFromOxford(searchValue);
    }
}
