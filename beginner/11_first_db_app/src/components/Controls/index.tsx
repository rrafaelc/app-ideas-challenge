import {
	useCallback,
	Dispatch,
	SetStateAction,
	useState,
	useEffect,
} from 'react';

import { Button } from './Button';

import { Container } from './style';

// https://stackoverflow.com/questions/56028635/passing-usestate-as-props-in-typescript/61857023#61857023
type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type ControlsProps = {
	setButtonClicked: Dispatcher<string>;
	setDone: Dispatcher<boolean>;
	done: boolean;
};

export const Controls = ({
	setButtonClicked,
	setDone,
	done,
}: ControlsProps) => {
	const [load, setLoad] = useState(true);
	const [clear, setClear] = useState(false);
	const [loading, setLoading] = useState(false);
	const [queryClicked, setQueryClicked] = useState(false);

	const handleClick = useCallback(
		(name: string): void => {
			if (name === 'load') {
				setLoad(false);
				setClear(true);

				setButtonClicked(name);
			}

			if (name === 'clear') {
				setLoad(true);
				setClear(false);

				setButtonClicked(name);
			}

			if (name === 'query') {
				// Force user to wait query to query again
				// reset setDone manually for useEffect
				setDone(false);
				setLoading(true);

				setQueryClicked(true);
				setButtonClicked(name);
			}
		},
		[setButtonClicked, setDone],
	);

	useEffect(() => {
		if (done && queryClicked) {
			setLoading(false);
			setQueryClicked(false);
		}
	}, [done, queryClicked]);

	return (
		<Container>
			<Button
				onClick={() => handleClick('load')}
				name='Load DB'
				active={load}
				disabled={!load}
				className={loading ? 'loading' : ''}
			/>
			<Button
				onClick={() => handleClick('query')}
				name='Query DB'
				active
				disabled={false}
				className={loading ? 'loading' : ''}
			/>
			<Button
				onClick={() => handleClick('clear')}
				name='Clear DB'
				active={clear}
				disabled={!clear}
				className={loading ? 'loading' : ''}
			/>
		</Container>
	);
};
