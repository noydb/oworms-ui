import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';

import { AlertService } from '../../../service/alert.service';
import { TagService } from '../../../service/tag.service';
import { WordService } from '../../../service/word.service';

import { AppRoutes } from '../../../util/app.routes';

import { ErrorUtil } from '../../../util/error.util';

import { Word } from '../../../model/word.interface';

import { LoadComponent } from '../../common/spinner/load.component';

@Component({
    selector: 'ow-word-edit',
    templateUrl: 'word-edit.component.html',
    styleUrls: ['./word-edit.component.scss']
})
export class WordEditComponent extends LoadComponent {

    readonly word$: Observable<Word>;

    constructor(private readonly route: ActivatedRoute,
                private readonly service: WordService,
                private readonly tagService: TagService,
                private readonly router: Router,
                private readonly titleService: Title,
                private readonly alertService: AlertService) {
        super();

        this.titleService.setTitle('oworms | edit');
        this.word$ = this.getWord();
    }

    update(uuid: string, updated: Word): void {
        this.state = 'loading';

        this.service.update(uuid, updated)
        .pipe(take(1))
        .subscribe({
            next: () => {
                this.alertService.add('Updated word', false, AppRoutes.getDetail(uuid));

                this.navToDetail(uuid);
            },
            error: (e) => {
                this.alertService.add(ErrorUtil.getMessage(e), true);
            }
        });
    }

    navToDetail(uuid: string): void {
        void this.router.navigate([AppRoutes.getDetail(uuid)]);
    }

    private getWord(): Observable<Word> {
        return this.route.paramMap
        .pipe(
            map((params: ParamMap) => params.get('uuid') ?? '0'),
            switchMap((uuid: string) => this.service.retrieve(uuid)),
            catchError((e: HttpErrorResponse) => {
                    this.state = 'error';
                    this.errorMessage = ErrorUtil.getMessage(e);

                    if (this.errorMessage.includes('exists')) {
                        this.alertService.add(this.errorMessage, true, AppRoutes.getDetail(e.error.uuid));
                    }

                    return of(undefined);
                }
            ));
    }
}
