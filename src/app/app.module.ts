import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './module/app-routing.module';

import { ChunkPipe } from './pipe/chunk.pipe';

import { LocalStorageService } from './service/local-storage.service';
import { WordHttpService } from './service/word.http.service';
import { WordService } from './service/word.service';

import { AppComponent } from './app.component';
import { ButtonComponent } from './component/common/button.component';
import { CredentialsComponent } from './component/credentials/credentials.component';
import { DropdownComponent } from './component/common/dropdown.component';
import { FilterComponent } from './component/filter/filter.component';
import { InputComponent } from './component/common/input.component';
import { StatisticsComponent } from './component/stats/statistics.component';
import { TopComponent } from './component/top/top.component';
import { WordFormComponent } from './component/word/form/word-form.component';
import { WordAddComponent } from './component/word/add/word-add.component';
import { WordDetailComponent } from './component/word/detail/word-detail.component';
import { WordOxfordComponent } from './component/word/search/word-oxford.component';
import { WordRandomComponent } from './component/word/random/word-random.component';
import { WordsComponent } from './component/word/list/words.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,

        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ButtonComponent,
        CredentialsComponent,
        DropdownComponent,
        FilterComponent,
        InputComponent,
        StatisticsComponent,
        WordAddComponent,
        WordDetailComponent,
        WordFormComponent,
        WordOxfordComponent,
        WordRandomComponent,
        WordsComponent,
        TopComponent,

        ChunkPipe
    ],
    providers: [
        FormGroupDirective,

        LocalStorageService,
        WordHttpService,
        WordService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
