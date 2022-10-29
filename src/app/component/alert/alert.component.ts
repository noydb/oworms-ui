import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { AlertService } from '../../service/alert.service';

import { Unsubscribes } from '../../util/auto-unsubscribe.directive';

import { Alert } from '../../model/alert.interface';

@Component({
    selector: 'ow-alerts',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.scss']
})
@Unsubscribes()
export class AlertComponent {

    show = false;
    readonly alerts$: Observable<Alert[]>;

    constructor(private readonly alertService: AlertService,
                private readonly router: Router) {
        this.alerts$ = this.alertService.getAll();

        this.listenForAlerts();
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

    private listenForAlerts(): void {
        this.alerts$
            .pipe(
                filter((alerts: Alert[]) => alerts?.length > 0),
                tap(() => {
                    this.show = true;
                }),
                delay(5000)
            )
            .subscribe({
                next: () => {
                    this.show = false;
                    this.alertService.removeAll();
                }
            });
    }
}
