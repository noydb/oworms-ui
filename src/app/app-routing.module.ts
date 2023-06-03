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
        title: 'about - oworms',
        data: { animation: 'about' }
    },
    {
        path: AppRoutes.ADD,
        component: WordAddComponent,
        title: 'new - oworms',
        canActivate: [LoggedInGuard],
        data: { animation: 'add' }
    },
    {
        path: AppRoutes.CREDENTIAL,
        component: CredentialsComponent,
        title: 'halt - oworms',
        data: { animation: 'credential' }
    },
    {
        path: AppRoutes.DETAIL,
        component: WordDetailComponent,
        data: { animation: 'detail' }
    },
    {
        path: AppRoutes.EDIT,
        component: WordEditComponent,
        canActivate: [LoggedInGuard],
        data: { animation: 'edit' }
    },
    {
        path: AppRoutes.ALL,
        component: WordsComponent,
        title: 'all - oworms',
        data: { animation: 'all' }
    },
    {
        path: AppRoutes.STATS,
        component: StatisticsComponent,
        title: 'statistics - oworms',
        data: { animation: 'statistics' }
    },
    {
        path: AppRoutes.PROFILE,
        component: ProfileComponent,
        title: 'my profile - oworms',
        canActivate: [LoggedInGuard],
        data: { animation: 'profile' }
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
