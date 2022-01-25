import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ow-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

    @Input()
    showAction: boolean = false;

    @Input()
    actionText: string = 'Action';

    @Output()
    readonly actionClick: EventEmitter<void> = new EventEmitter<void>();

    actionClicked(_: Event): void {
        this.actionClick.emit();
    }
}
