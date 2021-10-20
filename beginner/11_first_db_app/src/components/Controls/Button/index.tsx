import { Container } from './style';

interface ButtonProps {
	name: string;
	active: boolean;
	onClick: () => void;
}

export default ({ name, active, onClick }: ButtonProps) => (
	<Container active={active}>
		<div className='status'>
			<p>Status</p>
			<div className='dot' />
		</div>
		<button type='button' onClick={onClick}>
			{name}
		</button>
	</Container>
);
