import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanActivateGuard } from './guard/can-activate.guard';

import { ListComponent } from './page/list/list.component';

const routes: Routes = [
	{
		path: '',
		component: ListComponent,
		canActivate: [CanActivateGuard]
	},
	{
		path: 'list',
		component: ListComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
