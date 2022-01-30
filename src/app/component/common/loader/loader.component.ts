import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { WordService } from '../../../service/word.service';

@Component({
    selector: 'ow-loader',
    templateUrl: 'loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

    readonly busy$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private readonly wordService: WordService) {
        this.busy$ = this.wordService.isBusy();
    }
}
