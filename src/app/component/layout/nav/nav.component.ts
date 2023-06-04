import { Attribute, Component, Input } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { MENU_ITEMS } from '../../../util/data';

import { UtilService } from '../../../service/util.service';
import { WordService } from '../../../service/word.service';

import { FileUtil } from '../../../util/file.util';

import { MenuItem } from '../../../model/menu-item.interface';

@Component({
    selector: 'ow-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    @Input()
    readonly items: MenuItem[];

    @Input()
    centered: boolean = false;

    @Input()
    large: boolean = false;

    readonly apiVersion$: Observable<string>;
    readonly queryParams$: Observable<Params>;

    constructor(private readonly wordService: WordService,
                private readonly utilService: UtilService,
                @Attribute('items') private readonly _items: MenuItem[]) {
        this.apiVersion$ = this.utilService.apiVersion$.pipe(take(1));
        this.queryParams$ = this.utilService.getQueryParams().pipe(take(1));

        if (!_items || _items.length === 0) {
            this.items = MENU_ITEMS;
        }
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
