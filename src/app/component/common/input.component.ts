import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
    selector: 'ow-input',
    templateUrl: 'input.component.html',
    styleUrls: ['./input.component.scss'],
    viewProviders: [{
        provide: ControlContainer,
        useExisting: FormGroupDirective
    }]
})
export class InputComponent {

    @Input()
    name: string = '';

    @Input()
    required: boolean = false;

    @Input()
    type: string = 'text';

    @Input()
    value: any = undefined;

    @Input()
    placeholder: string = '';

    @Input()
    withNgModel: boolean = false;

    @Output()
    onValueChange: EventEmitter<any> = new EventEmitter<any>();

    parentForm: FormGroup;

    constructor(private fgDirective: FormGroupDirective) {
        this.parentForm = fgDirective.form;
    }

    updateValue($event: Event): void {
        // @ts-ignore
        const value: any = $event.target.value;

        this.onValueChange.emit(value);
    }
}
