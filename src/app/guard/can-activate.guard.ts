import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { WordService } from '../service/word.service';

@Injectable({
	providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

	constructor(private readonly router: Router, private readonly wordService: WordService) {
	}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		const u: string = state.root.queryParams.u;

		this.wordService.setUsername(u);

		this.router.navigate(
			['/list'],
			{ queryParamsHandling: 'preserve' }
		);

		return false;
	}

}
