import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

    constructor(private readonly titleService: Title) {
        this.titleService.setTitle('oworms | about');
    }

    setState(val: 'about' | 'creds'): void {
        this.state = val;
    }
}
