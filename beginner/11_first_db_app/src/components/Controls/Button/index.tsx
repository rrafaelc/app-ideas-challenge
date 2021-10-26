import { Container } from './style';

type ButtonProps = {
	name: string;
	active: boolean;
	className: string;
	onClick: () => void;
	disabled: boolean;
};

export const Button = ({
	name,
	active,
	className,
	onClick,
	disabled,
}: ButtonProps) => (
	<Container active={active}>
		<div className='status'>
			<p>Status</p>
			<div className='dot' />
		</div>
		<button
			type='button'
			className={className}
			onClick={onClick}
			disabled={disabled}
		>
			{name}
		</button>
	</Container>
);
