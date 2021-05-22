import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Config } from '../../util/config';

@Component({
    selector: 'ow-top',
    templateUrl: 'top.component.html',
    styleUrls: ['./top.component.scss']
})
export class TopComponent {

    readonly menuItems: any[] = Config.MENU_ITEMS;

    constructor(private readonly router: Router,
                private readonly aRoute: ActivatedRoute) {
    }

    navigate(path: string): void {
        this.router.navigate([path], {
            queryParamsHandling: 'preserve'
        });
    }

    isActive(path: string): boolean {
        return this.router.isActive(path, false);
    }
}
