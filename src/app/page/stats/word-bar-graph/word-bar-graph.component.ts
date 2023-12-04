import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Bar, BarGraph } from '../../../component/bar-graph/bar-graph.component';
import { Statistics } from '../../../model/statistics.interface';
import { Word } from '../../../model/word.interface';

@Component({
    selector: 'ow-word-bar-graph',
    templateUrl: 'word-bar-graph.component.html',
    styleUrls: ['./word-bar-graph.component.scss']
})
export class WordBarGraphComponent implements OnChanges {

    @Input()
    stats: Statistics;
    selectedBar: Bar;
    selectedWords: Word[] = [];
    readonly DATE_PIPE: DatePipe = new DatePipe('en');
    graph: BarGraph;

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.stats) {
            return;
        }

        if (JSON.stringify(this.stats) === JSON.stringify(changes.stats)) {
            return;
        }

        type tuple = [Date, Word[]];

        const keys: [string, Word[]][] = Object.entries(this.stats.dateWordMap);
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
                        showYLabel: index === 0 || showYLabel,
                        yLabel: this.DATE_PIPE.transform(date, 'MMM yyyy')
                    });
                }
            );

        this.graph = { min: 0, max, bars, intervals: 10 };
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
                    console.log(this.selectedWords);
                    return;
                }
            });
    }
}
