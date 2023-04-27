import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../service/alert.service';

import { Alert } from '../../model/alert.interface';

@Component({
    selector: 'ow-alerts',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

    readonly alerts: Alert[] = [];

    constructor(private readonly alertService: AlertService,
                private readonly router: Router) {
        this.alerts = this.alertService.alerts;
    }

    navigate(alert: Alert): void {
        const path: string = alert.path;
        if (!path || path.trim() === '') {
            this.remove(alert);
            return;
        }

        void this.router.navigate([path]);
    }

    remove(alert: Alert): void {
        this.alertService.remove(alert);
    }
}
