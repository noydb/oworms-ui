import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { AlertService } from '../../service/alert.service';
import { UserService } from '../../service/user.service';
import { WordService } from '../../service/word.service';

import { AppRoutes } from '../../util/app.routes';
import { ErrorUtil } from '../../util/error.util';

import { User } from '../../model/user.interface';
import { Word } from '../../model/word.interface';

@Component({
    selector: 'ow-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

    wordsCreated: number;
    likedWords: string[] = [];
    readonly form: FormGroup = new FormGroup<unknown>({
        username: new FormControl<string>('', [Validators.required]),
        email: new FormControl<string>('', [Validators.required, Validators.email])
    });
    private existing: User;

    constructor(private readonly service: UserService,
                private readonly router: Router,
                private readonly alertService: AlertService,
                private readonly wordService: WordService) {
        this.getUser();
    }

    update(): void {
        const { username, email }: FormValue = this.form.value;

        const request: User = {
            ...this.existing,
            username,
            email
        };

        this.service
            .update(request)
            .pipe(take(1))
            .subscribe({
                next: () => {
                    this.alertService.add('Saved profile changes');

                    this.service.setUser(undefined);

                    void this.router.navigate([AppRoutes.ALL]);
                },
                error: (e: HttpErrorResponse) => {
                    this.alertService.add(ErrorUtil.getMessage(e), true);
                }
            });
    }

    private getUser(): void {
        this.service
            .retrieve()
            .pipe(take(1))
            .subscribe({
                next: (user: User) => {
                    this.existing = user;
                    this.form.setValue({
                        username: user.username,
                        email: user.email
                    });

                    const words: Word[] = this.wordService.words$.value;

                    for (const word of words) {
                        if (word.createdBy.includes(user.username)) {
                            this.wordsCreated = this.wordsCreated++;
                        }

                        if (user.likedWordUUIDs.includes(word.uuid)) {
                            this.likedWords.push(word.theWord);
                        }
                    }
                }
            });
    }
}

interface FormValue {
    username: string;
    email: string;
}