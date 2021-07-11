import { Component } from '@angular/core';

@Component({
    template: ''
})
export abstract class LoadComponent {
    state: 'loading' | 'error' | 'complete' = undefined;
    errorMessage: string = 'Error while loading';
}
