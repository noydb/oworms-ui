import { Component } from '@angular/core';

@Component({
    selector: 'ow-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    readonly signature: string = `${new Date().getFullYear()} bp, cw, fv, jg, kmw, sk, tg`;

}
