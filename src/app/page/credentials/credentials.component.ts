import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';

import { AlertService } from '../../service/alert.service';
import { LocalStorageService } from '../../service/local-storage.service';
import { UserService } from '../../service/user.service';

import { AppRoutes } from '../../util/app.routes';
import { ComponentState } from '../../model/component-state.enum';

import { LoadComponent } from '../../component/common/spinner/load.component';

@Component({
    selector: 'ow-credentials',
    templateUrl: 'credentials.component.html',
    styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent extends LoadComponent {

    readonly form: FormGroup = new FormGroup({
        u: new FormControl<string>('', [Validators.required]),
        p: new FormControl<string>('', [Validators.required])
    });

    constructor(private readonly ls: LocalStorageService,
                private readonly alertService: AlertService,
                private readonly router: Router,
                private readonly route: ActivatedRoute,
                private readonly userService: UserService) {
        super();
        this.state = ComponentState.COMPLETE;
        this.getQueryParams();
    }

    submit(): void {
        this.state = ComponentState.LOADING;
        const u: string = this.form.get('u')?.value;
        const p: string = this.form.get('p')?.value;

        this.userService
        .login(u, p)
        .pipe(take(1))
        .subscribe({
            next: () => {
                this.state = ComponentState.COMPLETE;
                this.ls.set('u', u);
                this.ls.set('bna', p);

                this.alertService.add('Authenticated');
                void this.router.navigate([AppRoutes.PROFILE]);
            },
            error: () => {
                this.state = ComponentState.COMPLETE;
                this.alertService.add('Failed to authenticate', true);
            }
        });
    }

    cancel(): void {
        this.form.reset();
    }

    private getQueryParams(): Subscription {
        return this.route
        .queryParamMap
        .pipe(
            take(1),
            filter((qParamsMap: ParamMap) => qParamsMap.has('bna')),
            tap((qParamsMap: ParamMap) => {
                this.form.get('p').setValue(qParamsMap.get('bna'));

                const u = this.ls.get('u');
                if (u) {
                    this.form.get('u').setValue(this.ls.get('u'));
                    this.submit();
                }
            })
        )
        .subscribe();
    }
}
