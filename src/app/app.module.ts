import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupDirective } from '@angular/forms';

import { AppRoutingModule } from './module/app-routing.module';
import { ComponentModule } from './module/component.module';
import { WordModule } from './module/word.module';

import { LocalStorageService } from './service/local-storage.service';
import { WordHttpService } from './service/word.http.service';
import { WordService } from './service/word.service';

import { AppComponent } from './app.component';
import { CredentialsComponent } from './component/credentials/credentials.component';
import { StatisticsComponent } from './component/stats/statistics.component';
import { TopComponent } from './component/top/top.component';

@NgModule({
    imports: [
        HttpClientModule,

        AppRoutingModule,
        ComponentModule,
        WordModule
    ],
    declarations: [
        AppComponent,
        CredentialsComponent,
        StatisticsComponent,
        TopComponent
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
