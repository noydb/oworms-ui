import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

import { WordService } from '../../service/word.service';

import { Statistics } from '../../model/statistics.interface';

@Component({
    selector: 'ow-stats',
    templateUrl: 'statistics.component.html',
    styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

    statistics$: Observable<Statistics> = of({});

    constructor(private readonly service: WordService,
                private readonly titleService: Title) {
        this.titleService.setTitle('oworms | statistics');
    }

    ngOnInit(): void {
        this.statistics$ = this.service.getStatistics();
    }
}
