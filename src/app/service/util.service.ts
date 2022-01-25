import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UtilService {
    readonly documentClickedTarget: Subject<HTMLElement> = new Subject<HTMLElement>();
}
