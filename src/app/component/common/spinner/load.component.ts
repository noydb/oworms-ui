import { Component } from '@angular/core';

import { Unsubscribes } from '../../../util/auto-unsubscribe.directive';

@Component({
    template: ''
})
@Unsubscribes()
export abstract class LoadComponent {
    state: 'loading' | 'error' | 'complete' = undefined;
    errorMessage: string = 'there was an error (this is a default message, no specifics available)';
}
