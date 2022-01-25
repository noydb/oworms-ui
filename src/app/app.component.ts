import { Component, HostListener } from '@angular/core';

import { UtilService } from './service/util.service';

@Component({
    selector: 'ow-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private readonly uServ: UtilService) {
    }

    // for select component(s)
    @HostListener('document:click', ['$event'])
    documentClick(event: any): void {
        this.uServ.documentClickedTarget.next(event.target);
    }

}
