import { Params } from '@angular/router';

export interface MockActiveStateSnapshot {
	/**
	 * The route of the Mocked Router State
	 */
	firstChild: MockActiveStateSnapshot | null;
	/**
	 * The params of the Mocked Router State
	 */
	params?: Params;
	/**
	 * The params of the Mocked Router State
	 */
	queryParams?: Params;
}

export interface MockRouterStateSnapshot {
	/**
	 * The route of the Mocked Router State
	 */
	root: MockActiveStateSnapshot;
	/**
	 * The URL of the Mocked Router State
	 */
	url: string;
}

/*
 * Initital state used for the mock store provided by ngrx
 */
export const initialState = {
	applicationState: {
		isPendingRequest: false,
	},
	dummyState: {
		entity: {
			address: {
				city: 'Arkham City',
				street: 'Asylum',
				streetNumber: '13',
				streetNumberAddition: '',
				zipcode: '2234',
			},
			email: 'example@domain.com',
			firstName: 'Bruce',
			phone: '+3112345678',
			surName: 'Wayne',
			username: 'batman',
		},
		errorMessage: null,
		isLoaded: true,
		isLoading: false,
	},
	routerState: {
		state: {
			params: {
				language: 'nl',
			},
			queryParams: {
				q: 'nothing',
			},
			url: 'nl',
		},
	},
};
