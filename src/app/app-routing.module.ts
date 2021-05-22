import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanActivateGuard } from './guard/can-activate.guard';

import { WordAddComponent } from './component/add/word-add.component';
import { WordsComponent } from './component/list/words.component';
import { StatisticsComponent } from './component/stats/statistics.component';

const routes: Routes = [
    {
        path: 'worms',
        component: WordsComponent,
        canActivate: [CanActivateGuard]
    },
    {
        path: 'worms/add',
        component: WordAddComponent,
    },
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
