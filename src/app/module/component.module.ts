import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ChunkPipe } from '../pipe/chunk.pipe';

import { ErrorComponent } from '../component/common/error/error.component';
import { FilterComponent } from '../component/filter/filter.component';
import { FilterModalComponent } from '../component/filter/modal/filter-modal.component';
import { HeroComponent } from '../component/layout/hero/hero.component';
import { RandomTopComponent } from '../component/word/random/top/random-top.component';
import { SelectComponent } from '../component/common/select/select.component';
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
        RandomTopComponent,
        SelectComponent,
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
        RandomTopComponent,
        SelectComponent,
        TagsComponent,

        ChunkPipe
    ]
})
export class ComponentModule {
}
