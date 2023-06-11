import { HttpErrorResponse } from '@angular/common/http';
import { Attribute, Component, Input } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { WordService } from '../../../service/word.service';

import { AppRoutes } from '../../../util/app.routes';
import { ComponentState } from '../../../model/component-state.enum';
import { ErrorUtil } from '../../../util/error.util';

import { Word } from '../../../model/word.interface';

import { LoadComponent } from '../../common/spinner/load.component';

@Component({
    selector: 'ow-random-top',
    templateUrl: 'random-top.component.html',
    styleUrls: ['./random-top.component.scss']
})
export class RandomTopComponent extends LoadComponent {

    word$: Observable<Word>;
    readonly AppRoutes = AppRoutes;

    constructor(private readonly service: WordService,
                @Attribute('title') readonly title: string) {
        super();

        if (!title?.trim()) {
            this.state = ComponentState.LOADING;
            this.word$ = service
                .retrieveRandom()
                .pipe(
                    tap(() => {
                        this.state = ComponentState.COMPLETE;
                    }),
                    catchError((e: HttpErrorResponse) => {
                        this.state = ComponentState.ERROR;
                        this.errorMessage = ErrorUtil.getMessage(e);
                        return throwError(() => e);
                    })
                )
        } else {
            this.state = ComponentState.COMPLETE;
        }
    }

    @Input()
    set word(word: Word) {
        this.word$ = of(word);
    }
}
