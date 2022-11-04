import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupDirective } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ComponentModule } from './util/component.module';
import { WordModule } from './util/word.module';

import { LocalStorageService } from './service/local-storage.service';
import { TagService } from './service/tag.service';
import { UserHttpService } from './service/user.http.service';
import { WordHttpService } from './service/word.http.service';
import { WordService } from './service/word.service';

import { AboutComponent } from './page/about/about.component';
import { AlertComponent } from './component/alert/alert.component';
import { AppComponent } from './app.component';
import { CredentialsComponent } from './page/credentials/credentials.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { LoaderComponent } from './component/common/loader/loader.component';
import { ProfileComponent } from './page/profile/profile.component';
import { StatisticsComponent } from './page/stats/statistics.component';
import { TopComponent } from './component/layout/top/top.component';

@NgModule({
    imports: [
        HttpClientModule,

        AppRoutingModule,
        ComponentModule,
        WordModule
    ],
    declarations: [
        // page
        AboutComponent,
        AppComponent,
        ProfileComponent,
        StatisticsComponent,

        // component
        AlertComponent,
        CredentialsComponent,
        FooterComponent,
        LoaderComponent,
        TopComponent
    ],
    providers: [
        FormGroupDirective,

        LocalStorageService,
        TagService,
        UserHttpService,
        WordHttpService,
        WordService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
