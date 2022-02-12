import { Component } from '@angular/core';

import { AutoUnsubscribeComponent } from '../auto-unsubscribe.component';

@Component({
    template: ''
})
export abstract class LoadComponent extends AutoUnsubscribeComponent {
    state: 'loading' | 'error' | 'complete' = undefined;
    errorMessage: string = 'there was an error (this is a default message, no specifics available)';
}
