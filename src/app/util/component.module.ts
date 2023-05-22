import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ChunkPipe } from '../component/pipe/chunk.pipe';

import { ErrorComponent } from '../component/common/error/error.component';
import { FilterComponent } from '../component/filter/filter.component';
import { FilterModalComponent } from '../component/filter/modal/filter-modal.component';
import { HeroComponent } from '../component/layout/hero/hero.component';
import { SelectComponent } from '../component/common/select/select.component';
import { SpinnerComponent } from '../component/common/spinner/spinner.component';
import { TagsComponent } from '../component/tags/tags.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ErrorComponent,
        FilterComponent,
        FilterModalComponent,
        HeroComponent,
        SelectComponent,
        SpinnerComponent,
        TagsComponent,

        ChunkPipe
    ],
    exports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,

        ErrorComponent,
        FilterComponent,
        HeroComponent,
        SelectComponent,
        SpinnerComponent,
        TagsComponent,

        ChunkPipe
    ]
})
export class ComponentModule {
}
