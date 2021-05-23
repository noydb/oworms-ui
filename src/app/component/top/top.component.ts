import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Config } from '../../util/config';
import { MenuItem } from '../../model/menu-item.interface';

@Component({
    selector: 'ow-top',
    templateUrl: 'top.component.html',
    styleUrls: ['./top.component.scss']
})
export class TopComponent {

    readonly menuItems: MenuItem[] = Config.MENU_ITEMS;

    constructor(private readonly router: Router) {
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
