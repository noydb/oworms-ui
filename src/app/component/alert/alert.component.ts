import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AlertService } from '../../service/alert.service';

import { Alert } from '../../model/alert.interface';

import { AutoUnsubscribeComponent } from '../common/auto-unsubscribe.component';

@Component({
    selector: 'ow-alerts',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent extends AutoUnsubscribeComponent {

    show = false;
    readonly alerts$: Observable<Alert[]>;

    constructor(private readonly alertService: AlertService, private readonly router: Router) {
        super();
        this.alerts$ = this.alertService.getAll();

        this.markForUnsub(this.listenForAlerts());
    }

    navigate({ path }: Alert): void {
        if (!path || path.trim() === '') {
            return;
        }

        void this.router.navigate([path]);
    }

    remove(alert: Alert): void {
        this.alertService.remove(alert);
    }

    private listenForAlerts(): Subscription {
        // probably a better way to do this
        return this.alerts$
        .pipe(
            filter((alerts: Alert[]) => alerts?.length > 0)
        )
        .subscribe(() => {
            this.show = true;

            setTimeout(() => {
                this.show = false;
                this.alertService.removeAll();
            }, 5000);
        });
    }
}
