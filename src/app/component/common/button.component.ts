import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ow-button',
    templateUrl: 'button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

    @Input()
    type: string = 'text';

    @Input()
    disabled: boolean = false;

    @Output()
    onButtonClick: EventEmitter<Event> = new EventEmitter<Event>();

    onClick($event: Event): void {
        this.onButtonClick.emit($event);
    }
}
