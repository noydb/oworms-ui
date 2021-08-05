import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ChunkPipe } from '../pipe/chunk.pipe';

import { ButtonComponent } from '../component/common/button.component';
import { DropdownComponent } from '../component/common/dropdown.component';
import { FilterComponent } from '../component/filter/filter.component';
import { InputComponent } from '../component/common/input.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ButtonComponent,
        DropdownComponent,
        FilterComponent,
        InputComponent,

        ChunkPipe
    ],
    exports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,

        ButtonComponent,
        DropdownComponent,
        FilterComponent,
        InputComponent,

        ChunkPipe
    ]
})
export class ComponentModule {
}
