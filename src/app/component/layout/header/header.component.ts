import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map, take } from 'rxjs/operators';

import { AlertService } from '../../../service/alert.service';
import { UtilService } from '../../../service/util.service';
import { WordService } from '../../../service/word.service';

import { AppRoutes } from '../../../util/app.routes';
import { MENU_ITEMS, RESPONSIVE_MENU_ITEMS } from '../../../util/data';
import { ErrorUtil } from '../../../util/error.util';
import { FileUtil } from '../../../util/file.util';

import { MenuItem } from '../../../model/menu-item.interface';
import { Word } from '../../../model/word.interface';

@Component({
    selector: 'ow-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    expandMenu: boolean = false;
    readonly items: MenuItem[] = MENU_ITEMS;
    readonly responsiveItems: MenuItem[] = RESPONSIVE_MENU_ITEMS;
    readonly apiVersion$: Observable<string>;

    constructor(private readonly router: Router,
                private readonly wordService: WordService,
                private readonly alertService: AlertService,
                private readonly utilService: UtilService) {
        this.apiVersion$ = this.utilService
            .getApiVersion()
            .pipe(
                map((version: string) => 'api ' + version),
                take(1)
            );
    }

    get showBurger(): boolean {
        return window.innerWidth < 920;
    }

    navigateToAdd(): void {
        void this.router.navigate([AppRoutes.ADD]);
    }

    navigate(item: MenuItem): void {
        this.expandMenu = false;

        if (item.name === 'random') {
            this.navigateToRandom();
            return;
        }

        void this.router.navigate(
            [item.path],
            { queryParams: item.filter ? { filter: item.filter } : undefined }
        );
    }

    getCSV(): void {
        this.wordService
            .getCSV()
            .pipe(take(1))
            .subscribe({
                next: (response: any) => FileUtil.downloadFile(response),
                error: (e: HttpErrorResponse) => this.alertService.add(ErrorUtil.getMessage(e), true)
            });
    }

    navigateToRandom(): void {
        this.wordService
            .retrieveRandom()
            .pipe(
                take(1),
                finalize(() => {
                    this.expandMenu = false;
                })
            )
            .subscribe({
                next: ({ uuid }: Word) => {
                    void this.router.navigate([AppRoutes.getDetail(uuid)]);
                },
                error: (e: HttpErrorResponse) => {
                    this.alertService.add(ErrorUtil.getMessage(e), true);
                }
            });

    }
}
