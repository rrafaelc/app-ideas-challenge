import { useState } from 'react';
import { FaGithubAlt, FaBell } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import { Header, Container, Panel, ClickOutsidePanel } from './style';

export default () => {
	const [show, setShow] = useState(false);

	return (
		<Header>
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

					<div className='text'>
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
		</Header>
	);
};
