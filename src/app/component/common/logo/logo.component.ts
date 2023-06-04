import { Component, inject } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { UtilService } from '../../../service/util.service';

import { AppRoutes } from '../../../util/app.routes';

@Component({
    selector: 'ow-logo',
    templateUrl: 'ow-logo.component.html',
    styleUrls: ['./ow-logo.component.scss']
})
export class LogoComponent {

    readonly queryParams$: Observable<Params> = inject(UtilService).getQueryParams().pipe(take(1));
    readonly AppRoutes = AppRoutes;

}
