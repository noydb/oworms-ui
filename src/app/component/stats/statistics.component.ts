import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { WordService } from '../../service/word.service';

import { Statistics } from '../../model/statistics.interface';

@Component({
    selector: 'ow-stats',
    templateUrl: 'statistics.component.html'
})
export class StatisticsComponent implements OnInit {

    statistics$: Observable<Statistics> = of({});

    constructor(private readonly service: WordService) {
    }

    ngOnInit(): void {
        this.statistics$ = this.service.getStatistics();
    }
}
