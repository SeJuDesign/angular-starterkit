import { initialState as mockStore } from '@testing/mock-store';
import * as fromdummy from './dummy.selectors';

describe('Selectors: dummy selector', () => {
	const { entity } = mockStore.dummyState;

	it('should return dummyEntity', () => {
		expect(fromdummy.selectEntity(mockStore)).toBe(entity);
	});

	it('should return dummy name', () => {
		expect(fromdummy.selectName(mockStore)).toBe(
			`${entity.firstName} ${entity.surName}`,
		);
	});

	it('should return dummy email', () => {
		expect(fromdummy.selectEmail(mockStore)).toBe(entity.email);
	});

	it('should return dummy address', () => {
		const { address } = entity;
		expect(fromdummy.selectAddress(mockStore)).toEqual({
			city: address.city,
			street: `${address.street} ${address.streetNumber}${address.streetNumberAddition}`,
			zipcode: address.zipcode,
		});
	});

	it('should return dummy address', () => {
		const updatedStore = {
			...mockStore,
			dummyState: {
				entity: {
					...mockStore.dummyState.entity,
					address: null,
				},
				error: null,
				isLoaded: true,
				isLoading: false,
			},
		};

		expect(fromdummy.selectAddress(updatedStore)).toBe(null);
	});

	it('should return isLoading', () => {
		expect(fromdummy.selectIsLoading(mockStore)).toBe(false);
	});

	it('should return isLoadingSuccessfully', () => {
		expect(fromdummy.selectIsLoadingSuccessfully(mockStore)).toBe(true);
	});

	it('should return the error', () => {
		expect(fromdummy.selectError(mockStore)).toBe(
			mockStore.dummyState.errorMessage,
		);
	});
});
