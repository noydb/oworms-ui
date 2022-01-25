import { Component, Input } from '@angular/core';

@Component({
    selector: 'ow-tags',
    templateUrl: 'tags.component.html',
    styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

    @Input()
    hideIfEmpty = false;

    tags: string[];

    @Input()
    set sTags(arg: string[]) {
        if (!arg || arg.length === 0) {
            this.tags = ['N/A'];
            return;
        }

        this.tags = arg;
    }
}
