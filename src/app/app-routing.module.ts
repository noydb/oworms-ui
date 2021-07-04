import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QueryParamInterceptorGuard } from './guard/query-param-interceptor-guard.service';

import { StatisticsComponent } from './component/stats/statistics.component';
import { WordAddComponent } from './component/word/word-add.component';
import { WordDetailComponent } from './component/word/detail/word-detail.component';
import { WordsComponent } from './component/word/list/words.component';

const routes: Routes = [
    {
        path: 'worms/all',
        component: WordsComponent,
        canActivate: [QueryParamInterceptorGuard]
    },
    {
        path: 'worms/new',
        component: WordAddComponent,
        canActivate: [QueryParamInterceptorGuard]
    },
    {
        path: 'worms/:theWord',
        component: WordDetailComponent,
        canActivate: [QueryParamInterceptorGuard]
    },
    // {
    //     path: 'worms/random',
    //     component: WordRandomComponent,
    //     canActivate: [QueryParamInterceptorGuard]
    // },
    {
        path: 'stats',
        component: StatisticsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
