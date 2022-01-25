import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupDirective } from '@angular/forms';

import { AppRoutingModule } from './module/app-routing.module';
import { ComponentModule } from './module/component.module';
import { WordModule } from './module/word.module';

import { LocalStorageService } from './service/local-storage.service';
import { TagService } from './service/tag.service';
import { WordHttpService } from './service/word.http.service';
import { WordService } from './service/word.service';

import { AboutComponent } from './component/about/about.component';
import { AppComponent } from './app.component';
import { CredentialsComponent } from './component/about/credentials/credentials.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { MainComponent } from './component/layout/main/main.component';
import { SpinnerComponent } from './component/common/spinner/spinner.component';
import { StatisticsComponent } from './component/stats/statistics.component';
import { TopComponent } from './component/layout/top/top.component';

@NgModule({
    imports: [
        HttpClientModule,

        AppRoutingModule,
        ComponentModule,
        WordModule
    ],
    declarations: [
        AboutComponent,
        AppComponent,
        CredentialsComponent,
        FooterComponent,
        MainComponent,
        SpinnerComponent,
        StatisticsComponent,
        TopComponent
    ],
    providers: [
        FormGroupDirective,

        LocalStorageService,
        TagService,
        WordHttpService,
        WordService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
