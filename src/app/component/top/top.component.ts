import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { WordService } from '../../service/word.service';

import { FileUtil } from '../../util/file.util';

import { AppRoutes } from '../../util/app.routes';

import { MenuItem } from '../../model/menu-item.interface';

@Component({
    selector: 'ow-top',
    templateUrl: 'top.component.html',
    styleUrls: ['./top.component.scss']
})
export class TopComponent {

    readonly subTitle: string = 'words';
    readonly menuItems: MenuItem[] = [
        { name: 'Credentials', path: AppRoutes.CREDS },
        { name: 'All Words', path: AppRoutes.LIST },
        { name: 'Add Word', path: AppRoutes.ADD },
        // { name: 'Search for Word', path: AppRoutes.SEARCH },
        { name: 'Random Word', path: AppRoutes.RANDOM },
        { name: 'Search Oxford API', path: AppRoutes.SEARCH_OX },
        { name: 'Statistics', path: AppRoutes.STATS },
    ];

    constructor(private readonly router: Router, private readonly wordService: WordService) {
    }

    navigate(path: string): void {
        void this.router.navigate([path]);
    }

    isActive(path: string): boolean {
        return this.router.isActive(path, false);
    }

    getCSV(): void {
        this.wordService
        .getCSV()
        .pipe(take(1))
        .subscribe((response: any) => {
            FileUtil.downloadFile(response);
        });
    }
}
