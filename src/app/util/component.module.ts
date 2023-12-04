import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ChunkPipe } from '../pipe/chunk.pipe';

import { BarGraphComponent } from '../component/bar-graph/bar-graph.component';
import { FilterComponent } from '../component/filter/filter.component';
import { FilterModalComponent } from '../component/filter/modal/filter-modal.component';
import { HeroComponent } from '../component/layout/hero/hero.component';
import { PlaceholderComponent } from '../component/common/error/placeholder.component';
import { SelectComponent } from '../component/common/select/select.component';
import { SpinnerComponent } from '../component/common/spinner/spinner.component';
import { TagsComponent } from '../component/tags/tags.component';

const COMPONENTS = [
    BarGraphComponent,
    FilterComponent,
    HeroComponent,
    PlaceholderComponent,
    SelectComponent,
    SpinnerComponent,
    TagsComponent
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ...COMPONENTS,
        FilterModalComponent,

        ChunkPipe
    ],
    exports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,

        ...COMPONENTS,

        ChunkPipe
    ]
})
export class ComponentModule {
}
