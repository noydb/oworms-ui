import { Component } from '@angular/core';

import { AB_PARA_1, AB_PARA_2, AB_PARA_3, AB_PARA_4 } from '../../util/data';

@Component({
    selector: 'ow-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

    paraOne = AB_PARA_1;
    paraTwo = AB_PARA_2;
    paraThree = AB_PARA_3;
    paraFour = AB_PARA_4;
}
