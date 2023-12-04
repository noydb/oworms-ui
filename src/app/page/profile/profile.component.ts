import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, take, tap } from 'rxjs/operators';

import { UserService } from '../../service/user.service';

import { AppRoutes } from '../../util/app.routes';

import { User } from '../../model/user.interface';
import { Word } from '../../model/word.interface';

import { LoadComponent } from '../../component/common/spinner/load.component';

@Component({
    selector: 'ow-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends LoadComponent {

    user: User;
    readonly form: FormGroup = new FormGroup<unknown>({
        username: new FormControl<string>('', [Validators.required]),
        email: new FormControl<string>('', [Validators.required, Validators.email])
    });

    constructor(private readonly service: UserService, private readonly router: Router) {
        super();
        this.getUser();
    }

    update(): void {
        const { username, email }: FormValue = this.form.value;
        const request: User = { ...this.user, username, email };

        this.service
            .update(request)
            .pipe(take(1))
            .subscribe();
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
                    this.user = user;
                    this.form.setValue({ username: user.username, email: user.email });
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
