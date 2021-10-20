import { useCallback } from 'react';
import { Container, Log } from './style';

interface LogProps {
	date: Date;
	msg: string;
	type: 'normal' | 'function' | 'error';
}

interface ExecutionProps {
	logs: LogProps[];
}

export default ({ logs }: ExecutionProps) => {
	const formatDate = useCallback((dt: Date) => {
		const hours = `0${dt.getHours()}`.slice(-2);
		const minutes = `0${dt.getMinutes()}`.slice(-2);
		const seconds = `0${dt.getSeconds()}`.slice(-2);

		return `${hours}:${minutes}:${seconds}`;
	}, []);

	return (
		<Container>
			<div className='header'>Execution details</div>
			<div className='logs'>
				{logs.map(lg => (
					<Log key={Math.random().toString(36).substr(2, 9)}>
						<p className='date'>{formatDate(lg.date)}</p>
						<p className={lg.type}>{lg.msg}</p>
					</Log>
				))}
			</div>
		</Container>
	);
};
