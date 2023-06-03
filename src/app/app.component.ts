import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UtilService } from './service/util.service';
import { fadeAnimation } from './animate/fade-in.animation';

@Component({
    selector: 'ow-root',
    templateUrl: './app.component.html',
    animations: [fadeAnimation]
})
export class AppComponent {

    constructor(private readonly uServ: UtilService) {
    }

    // for select component(s)
    @HostListener('document:click', ['$event'])
    documentClick(event: any): void {
        this.uServ.documentClickedTarget.next(event.target);
    }

    getState(outlet: RouterOutlet) {
        return outlet.activatedRouteData.animation;
    }
}
