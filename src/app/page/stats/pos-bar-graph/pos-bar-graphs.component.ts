import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Bar, BarGraph } from '../../../component/bar-graph/bar-graph.component';
import { Statistics } from '../../../model/statistics.interface';

@Component({
    selector: 'ow-pos-bar-graphs',
    templateUrl: 'pos-bar-graphs.component.html',
    styleUrls: ['./pos-bar-graphs.component.scss']
})
export class PosBarGraphsComponent implements OnChanges {

    @Input()
    stats: Statistics;
    totalGraph: BarGraph;
    percentageGraph: BarGraph;

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.stats) {
            return;
        }

        if (JSON.stringify(this.stats) === JSON.stringify(changes.stats)) {
            return;
        }

        this.totalGraph = this.getTotalGraph();
    }

    private getTotalGraph(): BarGraph {
        type tuple = [string, number];

        const keys: [string, number][] = Object.entries(this.stats.partsOfSpeechTotals);
        let max: number = 1;

        const bars: Bar[] = keys
            .sort((a: tuple, b: tuple) =>
                new Date(a[0]).getTime() - new Date(b[0]).getTime()
            )
            .map(([pos, total]: tuple) => {
                    if (total > max) {
                        max = total + 10;
                    }

                    return ({
                        key: pos,
                        value: total,
                        label: pos,
                        showYLabel: false,
                        yLabel: ''
                    });
                }
            );

        return { min: 0, max, bars, intervals: 10 };
    }
}
