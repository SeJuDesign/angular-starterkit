import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TransferState } from '@angular/platform-browser';

import { DummyInterface } from '@store/dummy/dummy.interface';
import { initialState as mockStore } from '@testing/mock-store';
import { DummyService } from './dummy.service';

describe('Service: Dummy service', () => {
	let httpTestingController: HttpTestingController;
	let dummyService: DummyService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [DummyService, TransferState],
		});

		httpTestingController = TestBed.get(HttpTestingController);
		dummyService = TestBed.get(DummyService);
	});

	afterEach(() => {
		// After every test, assert that there are no more pending requests.
		httpTestingController.verify();
	});

	describe('#getDummyData', () => {
		beforeEach(() => {
			dummyService = TestBed.get(DummyService);
		});

		it('should return expected Dummy', () => {
			const mockDummy: DummyInterface = mockStore.dummyState.entity;

			dummyService
				.getDummyData()
				.subscribe((response: DummyInterface) => {
					expect(response).toEqual(mockDummy);
				});

			httpTestingController
				.expectOne(`/assets/dummy/dummy.json`)
				.flush(mockDummy, { status: 200, statusText: 'Ok' });

			// After the call has been made, return dummy as Observable
			dummyService
				.getDummyData()
				.subscribe((response: DummyInterface) => {
					expect(response).toEqual(mockDummy);
				});
		});
	});
});
