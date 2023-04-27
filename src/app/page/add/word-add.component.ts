import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { AlertService } from '../../service/alert.service';
import { WordService } from '../../service/word.service';

import { AppRoutes } from '../../util/app.routes';
import { ErrorUtil } from '../../util/error.util';

import { Word } from '../../model/word.interface';

@Component({
  selector: 'ow-word-add',
  templateUrl: 'word-add.component.html',
  styleUrls: ['./word-add.component.scss']
})
export class WordAddComponent {

  constructor(private readonly service: WordService,
              private readonly router: Router,
              private readonly alertService: AlertService,
              private readonly titleService: Title) {
      this.titleService.setTitle('new - oworms')
  }

  createWord(word: Word): void {
    this.service
    .create(word)
    .pipe(take(1))
    .subscribe({
      next: () => {
        this.alertService.add('Created word');

        void this.router.navigate([AppRoutes.ALL], { queryParamsHandling: 'preserve' });
      },
      error: (e: HttpErrorResponse) => {
        const message: string = ErrorUtil.getMessage(e);

        if (message.includes('exists')) {
          this.alertService.add(
              ErrorUtil.getMessage(e) + ". Click here to view it",
              true,
              AppRoutes.getDetail(e.error.uuid)
          );
        } else {
          this.alertService.add(ErrorUtil.getMessage(e), true);
        }
      }
    });
  }
}
