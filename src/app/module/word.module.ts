import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentModule } from './component.module';

import { WordAddComponent } from '../page/add/word-add.component';
import { WordCardComponent } from '../component/word/card/word-card.component';
import { WordDetailComponent } from '../page/detail/word-detail.component';
import { WordEditComponent } from '../page/edit/word-edit.component';
import { WordFormComponent } from '../component/word/form/word-form.component';
import { WordsComponent } from '../page/list/words.component';

@NgModule({
    imports: [
        RouterModule,

        ComponentModule
    ],
    declarations: [
        WordAddComponent,
        WordCardComponent,
        WordDetailComponent,
        WordEditComponent,
        WordFormComponent,
        WordsComponent,
    ],
    exports: [
        WordAddComponent,
        WordCardComponent,
        WordDetailComponent,
        WordEditComponent,
        WordFormComponent,
        WordsComponent
    ]
})
export class WordModule {
}
