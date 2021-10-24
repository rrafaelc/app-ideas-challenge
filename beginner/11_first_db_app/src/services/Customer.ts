type RequestDTO = {
	userid: string;
	name: string;
	email: string;
};

type LogProps = {
	type: 'info' | 'error' | 'function';
	msg: string;
};

// eslint-disable-next-line
type SendLog = ({ type, msg }: LogProps) => void;

class Customer {
	dbName: string;

	sendLog: SendLog;

	constructor(dbName: string, sendLog: SendLog) {
		this.dbName = dbName;
		this.sendLog = sendLog;

		if (!window.indexedDB) {
			// eslint-disable-next-line
			window.alert(
				"Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.",
			);
		}
	}

	/**
	 * Remove all rows from the database
	 * @memberof Customer
	 */
	removeAllRows = () => {
		const request = indexedDB.open(this.dbName, 1);

		// https://stackoverflow.com/questions/61162942/why-does-typescript-throw-the-error-ts2339-property-error-does-not-exist-on
		// https://github.com/microsoft/TypeScript/issues/30669
		request.onerror = (event: any) => {
			this.sendLog({
				type: 'error',
				msg: `removeAllRows - Database error: ${event.target.error.code} - ${event.target.error.message}`,
			});
		};

		request.onsuccess = (event: any) => {
			this.sendLog({
				type: 'info',
				msg: 'Deleting all customers...',
			});

			const db = event.target!.result;
			const txn = db.transaction('customers', 'readwrite');

			txn.onerror = (event: any) => {
				this.sendLog({
					type: 'error',
					msg: `removeAllRows - Txn error: ${event.target.error.code} - ${event.target.error.message}`,
				});
			};

			txn.oncomplete = () => {
				this.sendLog({ type: 'info', msg: 'All rows removed!' });
				this.sendLog({ type: 'function', msg: 'Clear DB Finished' });
			};
			const objectStore = txn.objectStore('customers');
			const getAllKeysRequest = objectStore.getAllKeys();
			getAllKeysRequest.onsuccess = () => {
				getAllKeysRequest.result.forEach((key: any) => {
					objectStore.delete(key);
				});
			};
		};
	};

	// addData = (customerData: RequestDTO[]) => {
	// const request = indexedDB.open(this.dbName, 1);

	// request.onerror = event => {
	// console.log(`addData - Database error: ${event.target.}`);
	// };

	// request.onsuccess = () => {
	// const db = request.result;

	// const transaction = db.transaction(['customers'], 'readwrite');
	// };

	// customerData.forEach((customer: RequestDTO) => {
	// objectStore.put(customer);
	// });
	// };

	/**
	 * Populate the Customer database with an initial set of customer data
	 * @param {[object]} customerData Data to add
	 * @memberof Customer
	 */
	initialLoad = (customerData: RequestDTO[]) => {
		const request = indexedDB.open(this.dbName, 1);

		request.onerror = (event: any) => {
			this.sendLog({
				type: 'error',
				msg: `initialLoad - Database error: ${event.target.error.code} - ${event.target.error.message}`,
			});
		};

		request.onupgradeneeded = (event: any) => {
			const db = event.target.result;
			const objectStore = db.createObjectStore('customers', {
				keyPath: 'userid',
			});
			objectStore.onerror = (event: any) => {
				this.sendLog({
					type: 'error',
					msg: `initialLoad - objectStore error: ${event.target.error.code} - ${event.target.error.message}`,
				});
			};

			// Create an index to search customers by name and email
			objectStore.createIndex('name', 'name', { unique: false });
			objectStore.createIndex('email', 'email', { unique: true });
		};

		/**
		 * onupgradeneeded create the index
		 * and then populate with initial data
		 */
		request.onsuccess = () => {
			this.sendLog({
				type: 'info',
				msg: 'Populating customers...',
			});

			const db = request.result;

			const transaction = db.transaction(['customers'], 'readwrite');

			transaction.onerror = (event: any) => {
				this.sendLog({
					type: 'error',
					msg: `initialLoad - Transaction error: ${event.target.error.code} - ${event.target.error.message}`,
				});
			};

			transaction.oncomplete = () => {
				this.sendLog({
					type: 'info',
					msg: 'Load customers completed!',
				});

				this.sendLog({ type: 'function', msg: 'Load DB Finished' });
			};

			const objectStore = transaction.objectStore('customers');

			customerData.forEach(customer => {
				objectStore.put(customer);
			});

			db.close();
		};
	};
}

export default Customer;
