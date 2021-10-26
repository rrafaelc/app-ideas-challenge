import { Dispatch, SetStateAction } from 'react';

type CustomerDTO = {
	userid: string;
	name: string;
	email: string;
	order: string;
	sales: string;
};

type LogProps = {
	type: 'info' | 'error' | 'function';
	msg: string;
};

type SendLog = ({ type, msg }: LogProps) => void;

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type setDone = Dispatcher<boolean>;

export class Customer {
	dbName: string;

	sendLog: SendLog;

	constructor(dbName: string, sendLog: SendLog) {
		this.dbName = dbName;
		this.sendLog = sendLog;

		if (!window.indexedDB) {
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

		request.onsuccess = () => {
			this.sendLog({
				type: 'info',
				msg: 'Deleting all customers...',
			});

			const db = request.result;
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

	queryData = (
		pushCustomer: (customer: CustomerDTO) => void,
		setDone: setDone,
	) => {
		setDone(false);
		const request = indexedDB.open(this.dbName, 1);

		request.onerror = (event: any) => {
			this.sendLog({
				type: 'error',
				msg: `queryData - Database error: ${event.target.error.code} - ${event.target.error.message}`,
			});
			setDone(true);
		};

		request.onsuccess = () => {
			this.sendLog({
				type: 'info',
				msg: 'Query all customers...',
			});

			const db = request.result;

			try {
				const transaction = db.transaction(['customers'], 'readonly');

				transaction.onerror = (event: any) => {
					this.sendLog({
						type: 'error',
						msg: `queryData - Transaction error: ${event.target.error.code} - ${event.target.error.message}`,
					});
					setDone(true);
				};

				transaction.oncomplete = () => {
					this.sendLog({ type: 'info', msg: 'Query transaction done!' });

					this.sendLog({ type: 'function', msg: 'Query DB Finished' });
					setDone(true); // No errors, then done
				};

				const objectStore = transaction.objectStore('customers');

				const openCursor = objectStore.openCursor();

				openCursor.onerror = (event: any) => {
					this.sendLog({
						type: 'error',
						msg: `queryData - openCursor error: ${event.target.error.code} - ${event.target.error.message}`,
					});
					setDone(true);
				};

				openCursor.onsuccess = () => {
					const cursor = openCursor.result;

					if (cursor) {
						const customer: CustomerDTO = {
							userid: cursor.value.userid,
							name: cursor.value.name,
							email: cursor.value.email,
							order: cursor.value.order,
							sales: cursor.value.sales,
						};

						pushCustomer(customer);

						cursor.continue();
					}
				};
			} catch {
				setDone(true);
				db.close();
				indexedDB.deleteDatabase(this.dbName);

				this.sendLog({
					type: 'error',
					msg: 'No database found, load database first',
				});
				/**
				 * indexedDB.open will create a database if not exists
				 * if exists, will read the database
				 * this method query dont create index
				 * so will throw an error
				 * the only request to create database is initialLoad
				 * So, if throw an error, then close the db,
				 * delete the db created,
				 * and send an error
				 */
			}
		};
	};

	/**
	 * Populate the Customer database with an initial set of customer data
	 * @param {[object]} customerData Data to add
	 * @memberof Customer
	 */

	initialLoad = (customerData: CustomerDTO[]) => {
		const request = indexedDB.open(this.dbName, 1);

		request.onerror = (event: any) => {
			this.sendLog({
				type: 'error',
				msg: `initialLoad - Database error: ${event.target.error.code} - ${event.target.error.message}`,
			});
		};

		request.onupgradeneeded = () => {
			// request.onupgradeneeded = (event) => {
			// const db = request.result
			const db = request.result;
			const objectStore = db.createObjectStore('customers', {
				keyPath: 'userid',
			});

			// Create an index to search customers by name and email
			objectStore.createIndex('name', 'name', { unique: false });
			objectStore.createIndex('email', 'email', { unique: true });
			objectStore.createIndex('order', 'order', { unique: false });
			objectStore.createIndex('sales', 'sales', { unique: false });
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
