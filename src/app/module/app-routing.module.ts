import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from '../util/app.routes';

import { CredentialsComponent } from '../component/credentials/credentials.component';
import { StatisticsComponent } from '../component/stats/statistics.component';
import { WordAddComponent } from '../component/word/add/word-add.component';
import { WordDetailComponent } from '../component/word/detail/word-detail.component';
import { WordOxfordComponent } from '../component/word/search/word-oxford.component';
import { WordRandomComponent } from '../component/word/random/word-random.component';
import { WordsComponent } from '../component/word/list/words.component';

// had to add 'ui/' so requests can be redirected in server.js on prod
const routes: Routes = [
    {
        path: '',
        redirectTo: AppRoutes.LIST,
        pathMatch: 'full'
    },
    {
        path: AppRoutes.LIST,
        component: WordsComponent
    },
    {
        path: AppRoutes.ADD,
        component: WordAddComponent
    },
    {
        path: AppRoutes.RANDOM,
        component: WordRandomComponent
    },
    {
        path: AppRoutes.DETAIL,
        component: WordDetailComponent
    },
    {
        path: AppRoutes.SEARCH_OX,
        component: WordOxfordComponent
    },
    {
        path: AppRoutes.CREDS,
        component: CredentialsComponent
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
