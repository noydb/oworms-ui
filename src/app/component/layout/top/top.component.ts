import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { WordService } from '../../../service/word.service';

import { FileUtil } from '../../../util/file.util';

import { AppRoutes } from '../../../util/app.routes';

import { MenuItem } from '../../../model/menu-item.interface';
import { MENU_ITEMS } from '../../../util/data';
import { Word } from '../../../model/word.interface';

@Component({
    selector: 'ow-top',
    templateUrl: 'top.component.html',
    styleUrls: ['./top.component.scss']
})
export class TopComponent {

    readonly items: MenuItem[] = MENU_ITEMS;

    constructor(private readonly router: Router, private readonly wordService: WordService) {
    }

    navigateToRandom(): void {
        this.wordService
        .retrieveRandom()
        .pipe(take(1))
        .subscribe(({ id }: Word) => {
            void this.router.navigate([AppRoutes.BASE, String(id), 'detail']);
        });

    }

    navigateToAdd(): void {
        void this.router.navigate([AppRoutes.ADD]);
    }

    navigate(item: MenuItem): void {
        void this.router.navigate(
            [item.path],
            { queryParams: item.filter ? { filter: item.filter } : undefined }
        );
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
