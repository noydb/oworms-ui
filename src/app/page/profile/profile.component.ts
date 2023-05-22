import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, take, tap } from 'rxjs/operators';

import { AlertService } from '../../service/alert.service';
import { UserService } from '../../service/user.service';

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

    existing: User;
    readonly form: FormGroup = new FormGroup<unknown>({
        username: new FormControl<string>('', [Validators.required]),
        email: new FormControl<string>('', [Validators.required, Validators.email])
    });

    constructor(private readonly service: UserService,
                private readonly router: Router,
                private readonly alertService: AlertService) {
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

                void this.router.navigate([AppRoutes.ALL]);
            },
            error: (e: HttpErrorResponse) => {
                this.alertService.add(ErrorUtil.getMessage(e), true);
            }
        });
    }

    navToWord(word: Word): void {
        void this.router.navigate([AppRoutes.getDetail(word.uuid)]);
    }

    private getUser(): void {
        this.service
        .getLoggedInUser()
        .pipe(
            filter((user: User) => !!user),
            take(1),
            tap((user: User) => {
                this.existing = user;
                this.form.setValue({
                    username: user.username,
                    email: user.email
                });
            }),
            take(1)
        )
        .subscribe();
    }
}

interface FormValue {
    username: string;
    email: string;
}
