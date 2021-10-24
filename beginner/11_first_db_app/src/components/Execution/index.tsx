import { useCallback, useEffect, useRef } from 'react';
import { Container, Log } from './style';

interface LogProps {
	date: Date;
	msg: string;
	type: 'info' | 'error' | 'function';
}

interface ExecutionProps {
	logs: LogProps[];
}

export default ({ logs }: ExecutionProps) => {
	// https://stackoverflow.com/questions/61756810/scrolltobottom-using-reactjs-in-chat-app-for-new-messages
	const logContainerRef = useRef<HTMLDivElement | null>(null);

	const formatDate = useCallback((dt: Date) => {
		const hours = `0${dt.getHours()}`.slice(-2);
		const minutes = `0${dt.getMinutes()}`.slice(-2);
		const seconds = `0${dt.getSeconds()}`.slice(-2);

		return `${hours}:${minutes}:${seconds}`;
	}, []);

	useEffect(() => {
		if (logContainerRef.current) {
			const element = logContainerRef.current;

			// https://stackoverflow.com/questions/57028500/typescript-error-property-scrollintoview-does-not-exist-on-type-never-ts23
			element.scroll({
				top: element.scrollHeight,
				left: 0,
				behavior: 'smooth',
			});
		}
	}, [logs]);

	return (
		<Container>
			<div className='header'>Execution details</div>
			<div className='logs' ref={logContainerRef}>
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
