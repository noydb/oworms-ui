import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ow-dropdown',
    templateUrl: 'dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

    @Input()
    items: any[] = [];
    selectedValue: any;
    closed: boolean = true;

    @Output()
    readonly onValueChange: EventEmitter<any> = new EventEmitter<any>();

    selectItem(item: any): void {
        this.selectedValue = item;

        this.onValueChange.emit(this.selectedValue);
    }
}
