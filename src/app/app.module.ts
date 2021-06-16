import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { ChunkPipe } from './pipe/chunk.pipe';

import { WordHttpService } from './service/word.http.service';
import { WordService } from './service/word.service';

import { AppComponent } from './app.component';
import { WordAddComponent } from './component/add/word-add.component';
import { ButtonComponent } from './component/common/button.component';
import { DropdownComponent } from './component/common/dropdown.component';
import { InputComponent } from './component/common/input.component';
import { FilterComponent } from './component/filter/filter.component';
import { StatisticsComponent } from './component/stats/statistics.component';
import { TopComponent } from './component/top/top.component';
import { WordsComponent } from './component/list/words.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,

        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ButtonComponent,
        DropdownComponent,
        FilterComponent,
        InputComponent,
        WordAddComponent,
        WordsComponent,
        StatisticsComponent,
        TopComponent,
        ChunkPipe,
    ],
    providers: [
        WordHttpService,
        WordService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
