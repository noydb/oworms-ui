import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UtilService } from '../../service/util.service';

import { Bar, BarGraph } from '../../component/bar-graph/bar-graph.component';
import { Statistics } from '../../model/statistics.interface';
import { Word } from '../../model/word.interface';

@Component({
    selector: 'ow-stats',
    templateUrl: 'statistics.component.html',
    styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

    selectedBar: Bar;
    selectedWords: Word[] = [];
    readonly DATE_PIPE: DatePipe = new DatePipe('en');

    readonly graph$: Observable<BarGraph>;
    private stats: Statistics;

    constructor(private readonly service: UtilService) {
        type tuple = [Date, Word[]];

        this.graph$ = this.service
            .getStatistics()
            .pipe(
                map((stats: Statistics) => {
                    this.stats = stats;

                    const keys: [string, Word[]][] = Object.entries(stats.dateWordMap);
                    let max: number = 1;
                    let prevIndex: number = 0;

                    const bars: Bar[] = keys
                        .map(([date, words]: [string, Word[]]) =>
                            [new Date(date), words]
                        )
                        .sort((a: tuple, b: tuple) =>
                            new Date(a[0]).getTime() - new Date(b[0]).getTime()
                        )
                        .map(([date, words]: tuple, index: number) => {
                                const value: number = words.length;
                                if (value > max) {
                                    max = value + 10;
                                }

                                let showYLabel: boolean;
                                if (Math.round(index - prevIndex) >= 10) {
                                    prevIndex = index;
                                    showYLabel = true;
                                }

                                return ({
                                    key: date.toLocaleDateString(),
                                    value,
                                    label: date.toDateString(),
                                    showYLabel:  index === 0 || showYLabel,
                                    yLabel: this.DATE_PIPE.transform(date, 'MMM yyyy')
                                });
                            }
                        );

                    const graph: BarGraph = { min: 0, max, bars, intervals: 10 };

                    return graph;
                })
            );
    }

    barClicked($event: Bar): void {
        this.selectedBar = $event;
        Object
            .entries(this.stats.dateWordMap)
            .forEach(([key, words]: [string, Word[]]) => {
                if (new Date(key).toLocaleDateString() === $event.key) {
                    this.selectedWords = words.sort((a: Word, b: Word) =>
                        new Date(a.creationDate).getTime() > new Date(b.creationDate).getTime() ? 1 : -1
                    );
                    return;
                }
            });
    }
}
