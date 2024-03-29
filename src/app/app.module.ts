import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ComponentModule } from './util/component.module';

import { LoggedInGuard } from './guard/logged-in.guard';

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
import { LoaderOverlayComponent } from './component/common/loader-overlay/loader-overlay.component';
import { LogoComponent } from './component/common/logo/logo.component';
import { ProfileComponent } from './page/profile/profile.component';
import { StatisticsComponent } from './page/stats/statistics.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { NavComponent } from './component/layout/nav/nav.component';
import { RandomTopComponent } from './component/word/random/random-top.component';
import { WordAddComponent } from './page/add/word-add.component';
import { WordCardComponent } from './component/word/card/word-card.component';
import { WordDetailComponent } from './page/detail/word-detail.component';
import { WordEditComponent } from './page/edit/word-edit.component';
import { WordFormComponent } from './component/word/form/word-form.component';
import { WordLikeComponent } from './component/word/like/word-like.component';
import { WordsComponent } from './page/list/words.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        RouterModule,

        AppRoutingModule,
        ComponentModule
    ],
    declarations: [
        // page
        AboutComponent,
        AppComponent,
        CredentialsComponent,
        ProfileComponent,
        StatisticsComponent,
        WordAddComponent,
        WordDetailComponent,
        WordEditComponent,
        WordLikeComponent,
        WordsComponent,

        // component
        AlertComponent,
        FooterComponent,
        LoaderOverlayComponent,
        LogoComponent,
        RandomTopComponent,
        HeaderComponent,
        NavComponent,
        WordCardComponent,
        WordFormComponent
    ],
    providers: [
        FormGroupDirective,

        LocalStorageService,
        TagService,
        UserHttpService,
        WordHttpService,
        WordService,

        LoggedInGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
