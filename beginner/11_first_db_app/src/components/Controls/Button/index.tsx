import { Container } from './style';

type ButtonProps = {
	name: string;
	active: boolean;
	onClick: () => void;
	disabled: boolean;
};

export const Button = ({ name, active, onClick, disabled }: ButtonProps) => (
	<Container active={active}>
		<div className='status'>
			<p>Status</p>
			<div className='dot' />
		</div>
		<button type='button' onClick={onClick} disabled={disabled}>
			{name}
		</button>
	</Container>
);
