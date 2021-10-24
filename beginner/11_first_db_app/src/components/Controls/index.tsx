import { useCallback, Dispatch, SetStateAction } from 'react';
import Button from './Button';

import { Container } from './style';

// https://stackoverflow.com/questions/56028635/passing-usestate-as-props-in-typescript/61857023#61857023
type Dispatcher<S> = Dispatch<SetStateAction<S>>;
interface ControlsProps {
	setButtonClicked: Dispatcher<string>;
}

export const Controls = ({ setButtonClicked }: ControlsProps) => {
	const handleClick = useCallback(
		(name: string): void => {
			// eslint-disable-next-line
			if (true) {
				setButtonClicked(name);
			}
		},
		[setButtonClicked],
	);

	return (
		<Container>
			<Button onClick={() => handleClick('load')} name='Load DB' active />
			<Button onClick={() => handleClick('query')} name='Query DB' active />
			<Button
				onClick={() => handleClick('clear')}
				name='Clear DB'
				active={false}
			/>
		</Container>
	);
};
