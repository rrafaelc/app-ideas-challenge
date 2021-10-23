import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import Result from '../../components/Result';
import Controls from '../../components/Controls';
import Execution from '../../components/Execution';
import Footer from '../../components/Footer';

import { Container, Main, LeftCenter, RightCenter } from './style';

interface LogProps {
	date: Date;
	msg: string;
	type: 'normal' | 'function' | 'error';
}

interface NotificationProps {
	msg: string;
}

const App = () => {
	const [buttonClicked, setButtonClicked] = useState('');
	const [logs, setLogs] = useState<LogProps[]>([]);
	const [notifications, setNotifications] = useState<NotificationProps[]>([]);

	const sendLog = () => {
		const log: LogProps = {
			date: new Date(),
			msg: 'Load the Customers database',
			type: 'function',
		};
		setLogs([...logs, log]);
	};

	const sendNotification = () => {
		const notification: NotificationProps = {
			msg: 'Load DB Starts',
		};
		setNotifications([...notifications, notification]);
		toast.info('Load DB Starts', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: 'dark',
		});
	};

	useEffect(() => {
		// Test temporary
		if (buttonClicked) {
			sendLog();
			sendNotification();
			setButtonClicked('');
		}
	}, [buttonClicked]);

	return (
		<>
			<Header />
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
