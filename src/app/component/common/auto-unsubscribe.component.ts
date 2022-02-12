import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { SubscriptionUtil } from '../../util/subscription.util';

@Component({
    selector: 'ow-auto-unsubscribe',
    template: ''
})
export class AutoUnsubscribeComponent {

    readonly subscriptions: Subscription[] = [];

    ngOnDestroy(): void {
        SubscriptionUtil.unsubscribe(this.subscriptions);
    }

    markForUnsub(subscription: Subscription): void {
        this.subscriptions.push(subscription);
    }
}
