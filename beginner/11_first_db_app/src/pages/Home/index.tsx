import { useEffect, useState } from 'react';

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

const App = () => {
	const [buttonClicked, setButtonClicked] = useState('');
	const [logs, setLogs] = useState<LogProps[]>([]);

	const sendLog = () => {
		const log: LogProps = {
			date: new Date(),
			msg: 'Load the Customers database',
			type: 'function',
		};
		setLogs([...logs, log]);
	};

	useEffect(() => {
		// Test temporary
		if (buttonClicked) {
			sendLog();
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
