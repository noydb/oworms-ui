import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { take } from 'rxjs/operators';

import { UtilService } from '../../service/util.service';

import { Statistics } from '../../model/statistics.interface';

@Component({
    selector: 'ow-stats',
    templateUrl: 'statistics.component.html',
    styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

    stats: Statistics;
    readonly DATE_PIPE: DatePipe = new DatePipe('en');

    constructor(private readonly service: UtilService) {
        this.service
            .getStatistics()
            .pipe(take(1))
            .subscribe({
                next: (stats: Statistics) => {
                    this.stats = stats;
                }
            });
    }
}
