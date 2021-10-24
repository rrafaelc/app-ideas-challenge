import { useState } from 'react';
import { FaGithubAlt, FaBell } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import { Container, Panel, ClickOutsidePanel } from './style';

type NotificationProp = {
	msg: string;
};

type Notification = {
	notifications: NotificationProp[];
};

export const Header = ({ notifications }: Notification) => {
	const [show, setShow] = useState(false);

	return (
		<header style={{ background: '#323232' }}>
			<Container>
				<span className='logo'>indexedDB App</span>
				<div className='icons'>
					<a
						href='https://github.com'
						target='_blank'
						rel='noopener noreferrer'
						title='Github'
					>
						<FaGithubAlt />
					</a>
					<button
						type='button'
						title='Notification panel'
						onClick={() => setShow(!show)}
					>
						<FaBell />
					</button>
				</div>
				<Panel className={show ? 'active' : ''}>
					<div className='panel'>
						<span>Notifications</span>
						<button
							type='button'
							className='close'
							onClick={() => setShow(!show)}
						>
							<AiOutlineClose size={24} color='#fff' />
						</button>
					</div>

					<div className='notifications'>
						<p>Load DB Starts</p>
						<p>Load DB Finished</p>
						<p>Query DB Starts</p>
					</div>
				</Panel>
			</Container>
			<ClickOutsidePanel
				className={show ? 'active' : ''}
				onClick={() => setShow(!show)}
			/>
		</header>
	);
};
