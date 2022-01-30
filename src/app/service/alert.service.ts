import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Alert } from '../model/alert.interface';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    private readonly alerts$: BehaviorSubject<Alert[]> = new BehaviorSubject<Alert[]>([] as Alert[]);

    getAll(): Observable<Alert[]> {
        return this.alerts$.asObservable();
    }

    add(message: string, error = false): void {
        const alerts: Alert[] = this.alerts$.value;

        const alert: Alert = {
            error,
            id: alerts.length,
            message,
            timeout: 5000
        };
        alerts.push(alert);

        this.alerts$.next(alerts);
    }

    addWithAction(message: string, path: string): void {
        const alerts: Alert[] = this.alerts$.value;

        const alert: Alert = {
            id: alerts.length,
            message,
            path,
            timeout: 5000
        };
        alerts.push(alert);

        this.alerts$.next(alerts);
    }

    remove(alert: Alert): void {
        const alerts: Alert[] = this.alerts$.value;

        const index: number = alerts.indexOf(alert);

        alerts.splice(index);

        this.alerts$.next(alerts);
    }

    removeAll(): void {
        this.alerts$.next([] as Alert[]);
    }
}
