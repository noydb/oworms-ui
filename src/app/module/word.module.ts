import { NgModule } from '@angular/core';

import { ComponentModule } from './component.module';

import { WordAddComponent } from '../component/word/add/word-add.component';
import { WordCardComponent } from '../component/word/card/word-card.component';
import { WordDetailComponent } from '../component/word/detail/word-detail.component';
import { WordEditComponent } from '../component/word/edit/word-edit.component';
import { WordFormComponent } from '../component/word/form/word-form.component';
import { WordsComponent } from '../component/word/list/words.component';

@NgModule({
    imports: [
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
