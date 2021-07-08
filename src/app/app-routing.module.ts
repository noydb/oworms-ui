import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QueryParamInterceptorGuard } from './guard/query-param-interceptor-guard.service';

import { StatisticsComponent } from './component/stats/statistics.component';
import { WordAddComponent } from './component/word/word-add.component';
import { WordDetailComponent } from './component/word/detail/word-detail.component';
import { WordsComponent } from './component/word/list/words.component';

// had to add 'ui/' so requests can be redirected in server.js on prod
const routes: Routes = [
    {
        path: '',
        redirectTo: 'ui/worms/all',
        pathMatch: 'full'
    },
    {
        // can't use '/' else route is always active
        path: 'ui/worms/all',
        component: WordsComponent,
        canActivate: [QueryParamInterceptorGuard]
    },
    {
        path: 'ui/worms/new',
        component: WordAddComponent,
        canActivate: [QueryParamInterceptorGuard]
    },
    {
        path: 'ui/worms/:id',
        component: WordDetailComponent,
        canActivate: [QueryParamInterceptorGuard]
    },
    // {
    //     path: 'ui/worms/random',
    //     component: WordRandomComponent,
    //     canActivate: [QueryParamInterceptorGuard]
    // },
    {
        path: 'ui/statistics',
        component: StatisticsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
