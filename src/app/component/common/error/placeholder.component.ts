import { Component, Input } from '@angular/core';

import { ComponentState } from '../../../model/component-state.enum';

@Component({
    selector: 'ow-placeholder',
    templateUrl: './placeholder.component.html',
    styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent {

    @Input()
    state: ComponentState;

    @Input()
    errorMessage: string;

}
