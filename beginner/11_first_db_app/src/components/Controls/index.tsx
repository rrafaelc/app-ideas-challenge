import { useCallback, Dispatch, SetStateAction, useState } from 'react';

import { Button } from './Button';

import { Container } from './style';

// https://stackoverflow.com/questions/56028635/passing-usestate-as-props-in-typescript/61857023#61857023
type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type ControlsProps = {
	setButtonClicked: Dispatcher<string>;
};

export const Controls = ({ setButtonClicked }: ControlsProps) => {
	const [load, setLoad] = useState(true);
	const [clear, setClear] = useState(false);

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
				setButtonClicked(name);
			}
		},
		[setButtonClicked],
	);

	return (
		<Container>
			<Button
				onClick={() => handleClick('load')}
				name='Load DB'
				active={load}
				disabled={!load}
			/>
			<Button
				onClick={() => handleClick('query')}
				name='Query DB'
				active
				disabled={false}
			/>
			<Button
				onClick={() => handleClick('clear')}
				name='Clear DB'
				active={clear}
				disabled={!clear}
			/>
		</Container>
	);
};
