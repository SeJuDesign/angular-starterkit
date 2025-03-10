import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import * as routerActions from '@store/router/router.actions';

/**
 * RouterEffects class which contains all effects when route effects are triggered
 * @return [description]
 */
@Injectable()
export class RouterEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly router: Router,
		private readonly location: Location,
	) {}

	/**
	 * navigate Effect of the RouterEffects class
	 */
	navigate$: Observable<{
		/**
		 * path of the URL where to navigate
		 */
		path: any[];
		/**
		 * optional queries of the URL where to navigate
		 */
		query?: object;
		/**
		 * extras of the URL where to navigate, based on NavigationExtras
		 */
		extras?: NavigationExtras;
	}> = createEffect(
		() =>
			this.actions$.pipe(
				ofType(routerActions.go),
				map((action: any) => action.payload),
				tap(({ path, query: queryParams, extras }) => {
					this.router.navigate(path, { queryParams, ...extras });
				}),
			),
		{ dispatch: false, useEffectsErrorHandler: true },
	);

	/**
	 * navigateBack Effect of the RouterEffects class
	 */
	navigateBack$: Observable<Action> = createEffect(
		() =>
			this.actions$.pipe(
				ofType(routerActions.back),
				tap(() => this.location.back()),
			),
		{ dispatch: false, useEffectsErrorHandler: true },
	);

	/**
	 * navigateForward Effect of the RouterEffects class
	 */
	navigateForward$: Observable<Action> = createEffect(
		() =>
			this.actions$.pipe(
				ofType(routerActions.forward),
				tap(() => this.location.forward()),
			),
		{ dispatch: false, useEffectsErrorHandler: true },
	);
}
