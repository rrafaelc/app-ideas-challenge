import { useCallback, Dispatch, SetStateAction } from 'react';
import Button from './Button';

import { Container } from './style';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;
interface ControlsProps {
	setButtonClicked: Dispatcher<string>;
}

export default ({ setButtonClicked }: ControlsProps) => {
	const handleClick = useCallback((name: string): void => {
		// eslint-disable-next-line
		if (true) {
			setButtonClicked(name);
		}
	}, []);

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
