export interface DummyInterface {
	/**
	 * address as AddressInterface
	 */
	address: AddressInterface;
	/**
	 * email represents the email used for DummyInterface
	 */
	email: string;
	/**
	 * firstName represents the name for DummyInterface
	 */
	firstName: string;
	/**
	 * phone is a default phone number
	 */
	phone: string;
	/**
	 * surName represents the name for DummyInterface
	 */
	surName: string;
	/**
	 * username represents the name for DummyInterface
	 */
	username: string;
}

export interface AddressInterface {
	/**
	 * city represents the city used for the AddressInterface
	 */
	city: string;
	/**
	 * street represents the street used for the AddressInterface
	 */
	street: string;
	/**
	 * streetNumber represents the streetNumber used for the AddressInterface
	 */
	streetNumber: string;
	/**
	 * streetNumberAddition represents the streetNumberAddition used for the AddressInterface
	 */
	streetNumberAddition: string;
	/**
	 * zipcode represents the zipcode used for the AddressInterface
	 */
	zipcode: string;
}

export interface AddressShortInterface {
	/**
	 * city represents the city used for the AddressShortInterface
	 */
	city: string;
	/**
	 * street represents the street with streetNumber and addition used for the AddressShortInterface
	 */
	street: string;
	/**
	 * zipcode represents the zipcode used for the AddressShortInterface
	 */
	zipcode: string;
}
