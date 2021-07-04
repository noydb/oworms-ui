import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DropdownItem } from '../../model/dropdown-item.interface';

@Component({
    selector: 'ow-dropdown',
    templateUrl: 'dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent<T> {

    @Input()
    items: DropdownItem<T>[] = [];

    @Input()
    title: string = 'Select';

    @Input()
    multiSelections: boolean = false;

    @Input()
    selectedValues: T[] = [];

    @Input()
    closeAfterEachSelection: boolean = true;

    @Input()
    disabled: boolean = false;

    closed: boolean = true;

    @Output()
    readonly valueChange: EventEmitter<T[]> = new EventEmitter<T[]>();

    selectItem(item: DropdownItem<T>): void {
        this.closed = this.closeAfterEachSelection;

        if (!this.multiSelections) {
            this.selectedValues = [item.value];

            this.valueChange.emit(this.selectedValues);

            return;
        }

        const existingVal: T | undefined = this.selectedValues.find((sVal) => sVal === item.value);
        if (existingVal) {
            this.selectedValues.splice(this.selectedValues.indexOf(existingVal), 1);
        } else {
            this.selectedValues.push(item.value);
        }

        this.valueChange.emit(this.selectedValues);
    }

    clearSelection($event: Event): void {
        $event.preventDefault();
        $event.stopPropagation();

        this.closed = true;

        this.selectedValues = [];

        this.valueChange.emit([]);
    }

    isSelected(value: T): boolean {
        return this.selectedValues.some((sVal) => sVal === value);
    }

    getTitle(): string {
        return this.selectedValues.length === 0 ? 'Select' : this.selectedValues.join(', ');
    }

    invertClosed(): void {
        if (this.disabled) {
            return;
        }

        this.closed = !this.closed;
    }
}
