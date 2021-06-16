import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ow-input',
    templateUrl: 'input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent {

    @Input()
    name: string = '';

    @Input()
    type: string = '';

    @Input()
    value: any = undefined;

    @Input()
    placeholder: string = '';

    @Output()
    onValueChange: EventEmitter<any> = new EventEmitter<any>();

    updateValue($event: Event): void {
        // @ts-ignore
        const value: any = $event.target.value;

        this.onValueChange.emit(value);
    }
}
