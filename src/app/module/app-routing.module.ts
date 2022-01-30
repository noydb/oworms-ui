import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from '../util/app.routes';

import { AboutComponent } from '../component/about/about.component';
import { StatisticsComponent } from '../component/stats/statistics.component';
import { WordAddComponent } from '../component/word/add/word-add.component';
import { WordDetailComponent } from '../component/word/detail/word-detail.component';
import { WordEditComponent } from '../component/word/edit/word-edit.component';
import { WordOxfordComponent } from '../component/word/search/word-oxford.component';
import { WordRandomComponent } from '../component/word/random/word-random.component';
import { WordsComponent } from '../component/word/list/words.component';

// added 'ui/' so requests can be redirected in server.js on prod
const routes: Routes = [
    {
        path: '',
        redirectTo: AppRoutes.HOME,
        pathMatch: 'full'
    },
    {
        path: AppRoutes.ABOUT,
        component: AboutComponent
    },
    {
        path: AppRoutes.ADD,
        component: WordAddComponent
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
        path: AppRoutes.HOME,
        component: WordsComponent
    },
    {
        path: AppRoutes.RANDOM,
        component: WordRandomComponent
    },
    {
        path: AppRoutes.SEARCH_OX,
        component: WordOxfordComponent
    },
    {
        path: AppRoutes.STATS,
        component: StatisticsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
