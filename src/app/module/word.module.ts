import { NgModule } from '@angular/core';

import { ComponentModule } from './component.module';

import { WordAddComponent } from '../component/word/add/word-add.component';
import { WordDetailComponent } from '../component/word/detail/word-detail.component';
import { WordFormComponent } from '../component/word/form/word-form.component';
import { WordOxfordComponent } from '../component/word/search/word-oxford.component';
import { WordRandomComponent } from '../component/word/random/word-random.component';
import { WordsComponent } from '../component/word/list/words.component';

@NgModule({
    imports: [
        ComponentModule
    ],
    declarations: [
        WordAddComponent,
        WordDetailComponent,
        WordFormComponent,
        WordOxfordComponent,
        WordRandomComponent,
        WordsComponent,
    ],
    exports: [
        WordAddComponent,
        WordDetailComponent,
        WordFormComponent,
        WordOxfordComponent,
        WordRandomComponent,
        WordsComponent
    ]
})
export class WordModule {
}
