import { Subscription } from 'rxjs';

export class SubscriptionUtil {
	static unsubscribe(subscription: Subscription | Array<Subscription>): void {
		const tempSubscription: Array<Subscription> = Array.isArray(subscription)
			? subscription
			: [subscription];

		tempSubscription
			.filter((sub: Subscription) => !!sub)
			.forEach((sub: Subscription) => {
				sub.unsubscribe();
			});
	}
}
