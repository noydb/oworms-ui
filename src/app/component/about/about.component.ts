import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { AB_PARA_1, AB_PARA_2, AB_PARA_3, AB_PARA_4 } from '../../util/data';

@Component({
    selector: 'ow-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

    state: 'about' | 'creds' = 'about';
    paraOne = AB_PARA_1;
    paraTwo = AB_PARA_2;
    paraThree = AB_PARA_3;
    paraFour = AB_PARA_4;

    constructor(private readonly titleService: Title,
                private readonly route: ActivatedRoute) {
        this.titleService.setTitle('oworms | about');

        this.getQueryParams();
    }

    setState(val: 'about' | 'creds'): void {
        this.state = val;
    }

    private getQueryParams(): Subscription {
        return this.route.queryParamMap
        .pipe(
            take(1),
            tap((qParamsMap: ParamMap) => {
                if (qParamsMap.get('creds')) {
                    this.state = 'creds';
                }
            }),
        ).subscribe();
    }
}
