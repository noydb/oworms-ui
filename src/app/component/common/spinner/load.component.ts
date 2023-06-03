import { Component } from '@angular/core';

import { Unsubscribes } from '../../../util/auto-unsubscribe.directive';

import { ComponentState } from '../../../model/component-state.enum';

@Component({
    template: ''
})
@Unsubscribes()
export abstract class LoadComponent {
    state: ComponentState = ComponentState.LOADING;
    errorMessage: string = '';
    readonly ComponentState = ComponentState;
}
