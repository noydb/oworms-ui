import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from '../../../service/user.service';
import { WordService } from '../../../service/word.service';

@Component({
    selector: 'ow-loader-overlay',
    templateUrl: 'loader-overlay.component.html',
    styleUrls: ['./loader-overlay.component.scss']
})
export class LoaderOverlayComponent {

    readonly busy$: Observable<boolean>;

    constructor(private readonly wordService: WordService,
                private readonly userService: UserService) {
        this.busy$ = combineLatest([
            this.wordService.isBusy(),
            this.userService.isBusy()
        ])
        .pipe(
            map(([wordBusy, userBusy]: [boolean, boolean]) => wordBusy || userBusy)
        );
    }
}
