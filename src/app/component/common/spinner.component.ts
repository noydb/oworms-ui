import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { WordService } from '../../service/word.service';

@Component({
    selector: 'ow-spinner',
    templateUrl: 'spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

    readonly busy$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private readonly wordService: WordService) {
        this.busy$ = this.wordService.isBusy();
    }
}
