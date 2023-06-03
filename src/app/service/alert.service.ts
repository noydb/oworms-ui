import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';

import { Alert } from '../model/alert.interface';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    private readonly alerts$: BehaviorSubject<Alert[]> = new BehaviorSubject<Alert[]>([] as Alert[]);
    static readonly TIMEOUT: number = 5000; // 5 seconds
    readonly alerts: Alert[] = [];

    getAll(): Observable<Alert[]> {
        return this.alerts$.asObservable();
    }

    add(message: string,
        error: boolean = false,
        timeout: number = AlertService.TIMEOUT,
        path: string = ''): void {
        const alert: Alert = {
            error,
            id: Math.round(Math.random() * 100),
            message,
            path
        };
        this.alerts.push(alert);

        of({})
            .pipe(delay(timeout))
            .subscribe({
                next: () => {
                    this.remove(alert);
                }
            });
    }

    addWithPath(message: string,
                error: boolean = false,
                path: string,
                timeout: number = AlertService.TIMEOUT): void {
        const alert: Alert = {
            error,
            id: Math.round(Math.random() * 100),
            message,
            path
        };
        this.alerts.push(alert);

        of({})
            .pipe(delay(timeout))
            .subscribe({
                next: () => {
                    this.remove(alert);
                }
            });
    }

    remove(alert: Alert): void {
        const toRemove: Alert = this.alerts.find(({ id }: Alert) => id === alert.id);
        const index: number = this.alerts.indexOf(toRemove);

        this.alerts.splice(index, 1);
    }
}
