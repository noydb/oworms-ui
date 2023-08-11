import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap, take, tap } from 'rxjs/operators';

import { AlertService } from '../../service/alert.service';
import { WordService } from '../../service/word.service';

import { AppRoutes } from '../../util/app.routes';

import { APIFieldError } from '../../model/api-field-error.interface';
import { ComponentState } from '../../model/component-state.enum';
import { Word } from '../../model/word.interface';

import { LoadComponent } from '../../component/common/spinner/load.component';

@Component({
    selector: 'ow-word-edit',
    templateUrl: 'word-edit.component.html',
    styleUrls: ['./word-edit.component.scss']
})
export class WordEditComponent extends LoadComponent {

    word: Word = { theWord: 'Loading', definition: 'Please wait', createdBy: 'Loading' };
    fieldErrors: APIFieldError[] = [];

    constructor(private readonly route: ActivatedRoute,
                private readonly service: WordService,
                private readonly router: Router,
                private readonly titleService: Title,
                private readonly alertService: AlertService,
                private readonly meta: Meta) {
        super();
        this.getWord();
    }

    update(uuid: string, updated: Word): void {
        this.fieldErrors = [];
        this.state = ComponentState.LOADING;

        this.service
        .update(uuid, updated)
        .pipe(take(1))
        .subscribe({
            next: () => {
                this.state = ComponentState.COMPLETE;
                this.alertService.addWithPath('Updated word', false, AppRoutes.getDetail(uuid));

                this.navToDetail(uuid);
            },
            error: (e: HttpErrorResponse) => {
                this.state = ComponentState.COMPLETE;
                this.fieldErrors = e.error.fieldErrors;
            }
        });
    }

    navToDetail(uuid: string): void {
        void this.router.navigate([AppRoutes.getDetail(uuid)]);
    }

    private getWord(): void {
        this.route
        .paramMap
        .pipe(
            map((params: ParamMap) => params.get('uuid') ?? '0'),
            switchMap((uuid: string) => this.service.retrieve(uuid)),
            tap((word: Word) => {
                this.updateMetaInfo(word);
            })
        )
        .subscribe({
            next: (word: Word) => {
                this.word = word;
                this.state = ComponentState.COMPLETE;
            },
            error: () => {
                this.state = ComponentState.ERROR;
            }
        });
    }

    private updateMetaInfo(word: Word): void {
        this.titleService.setTitle(`edit ${word.theWord} - oworms`);
        this.meta.updateTag({
            name: 'og:title',
            content: `Edit ${word.theWord} - ${word.partOfSpeech}`
        });
        this.meta.updateTag({
            name: 'twitter:title',
            content: `Edit ${word.theWord} - ${word.partOfSpeech}`
        });
        this.meta.updateTag({
            name: 'description',
            content: `${word.theWord} - ${word.partOfSpeech} - ${word.definition}`
        });
        this.meta.updateTag({
            name: 'og:description',
            content: `${word.theWord} - ${word.partOfSpeech}- ${word.definition}`
        });
        this.meta.updateTag({
            name: 'twitter:description',
            content: `${word.theWord} - ${word.partOfSpeech} - ${word.definition}`
        });
    }
}
