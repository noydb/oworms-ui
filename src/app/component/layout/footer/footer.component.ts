import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { WordService } from '../../../service/word.service';

import { FileUtil } from '../../../util/file.util';

import { MenuItem } from '../../../model/menu-item.interface';
import { MENU_ITEMS } from '../../../util/data';

@Component({
    selector: 'ow-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    readonly items: MenuItem[] = MENU_ITEMS;
    readonly signature: string = `${new Date().getFullYear()} bp, cw, fv, jg, kmw, sk, tg`;

    constructor(private readonly router: Router, private readonly wordService: WordService) {
    }

    navigate(path: string): void {
        void this.router.navigate([path]);
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
