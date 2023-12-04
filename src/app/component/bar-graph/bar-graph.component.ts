import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'ow-bar-graph',
    templateUrl: 'bar-graph.component.html',
    styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnChanges {

    intervals: YAxisInterval[] = [];

    @Input()
    graph: BarGraph;

    @Output()
    readonly barClick: EventEmitter<Bar> = new EventEmitter<Bar>();

    barClicked(bar: Bar): void {
        this.barClick.emit(bar);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.graph) {
            return;
        }

        if (JSON.stringify(this.graph) !== JSON.stringify(changes.graph)) {
            this.calcYAxisLabels();
        }
    }

    private calcYAxisLabels(): void {
        const min: number = this.graph.min;
        const max: number = this.graph.max;
        const intervalSize: number = Math.round((max - min) / this.graph.intervals / 10) * 10;

        let current: number = min;
        let intervals: YAxisInterval[] = [];
        while (current <= max) {
            // round to closest multiple of 10
            const roundedCurrent: number = Math.round(current / 10) * 10;
            intervals.push({ value: roundedCurrent, height: intervalSize });

            current += intervalSize;
        }

        this.intervals = intervals;
    }

}

export interface BarGraph {
    min: number;
    max: number;
    intervals: number;
    bars: Bar[];
}

export interface Bar {
    key: string;
    value: number;
    label: string;
    showYLabel: boolean;
    yLabel: string;
}

interface YAxisInterval {
    value: number;
    height: number;
}
