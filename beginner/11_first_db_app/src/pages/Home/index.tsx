import { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import Result from '../../components/Result';
import Controls from '../../components/Controls';
import Execution from '../../components/Execution';
import Footer from '../../components/Footer';

import Customer from '../../services/Customer';

import { Container, Main, LeftCenter, RightCenter } from './style';

type ExecutionProps = {
	date: Date;
	msg: string;
	type: 'info' | 'error' | 'function';
};

type CustomerData = {
	userid: string;
	name: string;
	email: string;
};

type NotificationProps = {
	msg: string;
};

const App = () => {
	const [buttonClicked, setButtonClicked] = useState('');
	const [logs, setLogs] = useState<ExecutionProps[]>([]);
	const [notifications, setNotifications] = useState<NotificationProps[]>([]);

	const sendNotification = useCallback(({ msg }: NotificationProps) => {
		toast.info(msg, {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			pauseOnFocusLoss: false,
			theme: 'dark',
		});

		const notification: NotificationProps = {
			msg,
		};
		setNotifications(notifications => [...notifications, notification]);
	}, []);

	const sendLog = useCallback(
		({ type, msg }: Omit<ExecutionProps, 'date'>) => {
			const log: ExecutionProps = {
				date: new Date(),
				msg,
				type,
			};
			setLogs(logs => [...logs, log]);

			if (type === 'function') {
				sendNotification({ msg });
			}
		},
		[sendNotification],
	);

	const customer = useMemo(
		() => new Customer('customer_db', sendLog),
		[sendLog],
	);

	const clearDB = useCallback(() => {
		sendLog({ type: 'function', msg: 'Clear DB Starts' });
		sendLog({
			type: 'info',
			msg: 'Delete all rows from the Customers database',
		});

		customer.removeAllRows();
	}, [sendLog, customer]);

	const loadDB = useCallback(() => {
		sendLog({ type: 'function', msg: 'Load DB Starts' });
		sendLog({ type: 'info', msg: 'Load the Customers database' });

		// Customers to add to initially populate the database with
		const customerData: CustomerData[] = [
			{ userid: '444', name: 'Bill', email: 'bill@company.com' },
			{ userid: '555', name: 'Donna', email: 'donna@home.org' },
		];

		customer.initialLoad(customerData);
	}, [sendLog, customer]);

	useEffect(() => {
		switch (buttonClicked) {
			case 'load':
				loadDB();
				setButtonClicked('');
				break;
			case 'query':
				// queryDB();
				setButtonClicked('');
				break;
			case 'clear':
				clearDB();
				setButtonClicked('');
				break;
			default:
				setButtonClicked('');
		}
	}, [buttonClicked, loadDB, clearDB]);

	return (
		<>
			<Header notifications={notifications} />
			<Container>
				<Main>
					<LeftCenter>
						<Result />
						<Controls setButtonClicked={setButtonClicked} />
					</LeftCenter>
					<RightCenter>
						<Execution logs={logs} />
					</RightCenter>
				</Main>
				<Footer />
			</Container>
		</>
	);
};

export default App;
