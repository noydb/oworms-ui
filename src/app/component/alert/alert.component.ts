import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AlertService } from '../../service/alert.service';

import { SubscriptionUtil } from '../../util/subscription.util';

import { Alert } from '../../model/alert.interface';

@Component({
    selector: 'ow-alerts',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

    show = false;
    readonly alerts$: Observable<Alert[]>;
    private readonly subs: Subscription[] = [];

    constructor(private readonly alertService: AlertService) {
        this.alerts$ = this.alertService.getAll();

        this.subs.push(this.listenForAlerts());
    }

    ngOnDestroy(): void {
        SubscriptionUtil.unsubscribe(this.subs);
    }

    remove(alert: Alert): void {
        this.alertService.remove(alert);
    }

    private listenForAlerts(): Subscription {
        // probably a better way to do this
        return this.alerts$
        .pipe(
            filter((alerts: Alert[]) => !!alerts && alerts.length > 0)
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
