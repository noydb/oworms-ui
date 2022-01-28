import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';

import { TagService } from '../../../service/tag.service';
import { WordService } from '../../../service/word.service';

import { AppRoutes } from '../../../util/app.routes';

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
                private readonly titleService: Title) {
        super();

        this.titleService.setTitle('oworms | edit');
        this.word$ = this.getWord();
    }

    update(id: number, updated: Word): void {
        this.service.update(id, updated)
        .pipe(take(1))
        .subscribe(() => {
            alert('word updated');

            this.navToDetail(id);
        }, (e) => {
            console.error(e);

            alert(e.error.message);
        });
    }

    cancel(wordId: number): void {
        this.navToDetail(wordId);
    }

    private getWord(): Observable<Word> {
        return this.route.paramMap
        .pipe(
            map((params: ParamMap) => params.get('id') ?? '0'),
            switchMap((id: string) => this.service.retrieve(Number(id))),
            catchError((e: any) => {
                    this.state = 'error';
                    this.errorMessage = e.error.message;

                    return of(undefined);
                }
            ));
    }

    private navToDetail(wordId: number): void {
        void this.router.navigate([AppRoutes.BASE, wordId, 'detail']);
    }
}
