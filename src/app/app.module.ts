import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { ChunkPipe } from './pipe/chunk.pipe';

import { WordHttpService } from './service/word.http.service';
import { WordService } from './service/word.service';

import { AppComponent } from './app.component';
import { WordAddComponent } from './component/word/word-add.component';
import { WordFormComponent } from './component/word/form/word-form.component';
import { ButtonComponent } from './component/common/button.component';
import { DropdownComponent } from './component/common/dropdown.component';
import { InputComponent } from './component/common/input.component';
import { FilterComponent } from './component/filter/filter.component';
import { StatisticsComponent } from './component/stats/statistics.component';
import { TopComponent } from './component/top/top.component';
import { WordsComponent } from './component/word/list/words.component';
import { WordDetailComponent } from './component/word/detail/word-detail.component';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        ButtonComponent,
        DropdownComponent,
        FilterComponent,
        InputComponent,
        WordFormComponent,
        WordAddComponent,
        WordDetailComponent,
        WordsComponent,
        StatisticsComponent,
        TopComponent,

        ChunkPipe
    ],
    providers: [
        FormGroupDirective,

        WordHttpService,
        WordService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
