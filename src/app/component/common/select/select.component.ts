import { Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { UtilService } from '../../../service/util.service';

import { SubscriptionUtil } from '../../../util/subscription.util';

import { SelectOption } from '../../../model/select-option.interface';

@Component({
    selector: 'ow-select',
    templateUrl: 'select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnDestroy {

    @Input()
    titleLabel: string = 'Select';

    @Input()
    options: SelectOption[] = [];

    @Input()
    multiSelect: boolean = false;

    @Input()
    disabled: boolean = false;

    @Input()
    transparent: boolean = false;

    closed: boolean = true;

    @Output()
    readonly valueChange: EventEmitter<SelectOption[] | SelectOption> = new EventEmitter<SelectOption[] | SelectOption>();

    selected: SelectOption[] = [];
    readonly subs: Subscription[] = [];
    @ViewChild('select') select;

    constructor(private readonly uSer: UtilService) {
        this.subs.push(this.listenForOutsideClicks());
    }

    @Input()
    set values(arg: SelectOption[] | SelectOption) {
        if (!arg || Array.isArray(arg) && arg.length === 0) {
            this.selected = [];
            return;
        }

        if (Array.isArray(arg)) {
            this.selected = arg;
        } else {
            this.selected = [arg];
        }
    }

    get title(): string {
        if (this.selected.length === 0) {
            return this.titleLabel;
        }

        if (!this.multiSelect) {
            return this.selected[0].titleLabel;
        }

        return this.selected.map(({ titleLabel }: SelectOption) => titleLabel).join(', ');
    }

    ngOnDestroy(): void {
        SubscriptionUtil.unsubscribe(this.subs);
    }

    selectItem(item: SelectOption): void {
        if (!this.multiSelect) {
            this.selected = [item];

            this.valueChange.emit(item);

            return;
        }

        const existingVal: SelectOption = this.selected.find(({ value }) => value === item.value);
        if (existingVal) {
            this.selected.splice(this.selected.indexOf(existingVal), 1);
        } else {
            this.selected.push(item);
        }

        this.closed = true;
        this.valueChange.emit(this.selected);
    }

    clearSelection($event: Event): void {
        $event.preventDefault();
        $event.stopPropagation();

        this.closed = true;

        this.selected = undefined;

        this.valueChange.emit(this.multiSelect ? [] : undefined);
    }

    isSelected(value: SelectOption): boolean {
        return this.selected.some((sVal) => sVal === value);
    }

    invertClosed($event: Event): void {
        $event.preventDefault();
        $event.stopPropagation();

        if (this.disabled) {
            return;
        }

        this.closed = !this.closed;
    }

    private listenForOutsideClicks(): Subscription {
        return this.uSer
        .documentClickedTarget
        .pipe(filter((_) => !this.closed))
        .subscribe((el: HTMLElement) => {
            const classes: DOMTokenList = el.classList;

            if (!classes.contains('select') && !classes.contains('s-title') &&
                !classes.contains('s-option') && !classes.contains('s-option-l')) {
                this.closed = true;
            }
        });
    }
}
