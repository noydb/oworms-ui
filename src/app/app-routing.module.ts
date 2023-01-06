import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from './util/app.routes';

import { LoggedInGuard } from './guard/logged-in.guard';

import { AboutComponent } from './page/about/about.component';
import { CredentialsComponent } from './page/credentials/credentials.component';
import { ProfileComponent } from './page/profile/profile.component';
import { StatisticsComponent } from './page/stats/statistics.component';
import { WordAddComponent } from './page/add/word-add.component';
import { WordDetailComponent } from './page/detail/word-detail.component';
import { WordEditComponent } from './page/edit/word-edit.component';
import { WordsComponent } from './page/list/words.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: AppRoutes.ALL,
        pathMatch: 'full'
    },
    {
        path: AppRoutes.ABOUT,
        component: AboutComponent,
        title: 'about - oworms'
    },
    {
        path: AppRoutes.ADD,
        component: WordAddComponent,
        title: 'new - oworms'
    },
    {
        path: AppRoutes.CREDENTIAL,
        component: CredentialsComponent,
        title: 'enter credentials - oworms'
    },
    {
        path: AppRoutes.DETAIL,
        component: WordDetailComponent
    },
    {
        path: AppRoutes.EDIT,
        component: WordEditComponent
    },
    {
        path: AppRoutes.ALL,
        component: WordsComponent,
        title: 'all - oworms'
    },
    {
        path: AppRoutes.STATS,
        component: StatisticsComponent,
        title: 'statistics - oworms'
    },
    {
        path: AppRoutes.PROFILE,
        component: ProfileComponent,
        title: 'my profile - oworms',
        canActivate: [LoggedInGuard]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
