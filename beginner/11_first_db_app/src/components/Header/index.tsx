import { useState } from 'react';
import { FaGithubAlt, FaBell } from 'react-icons/fa';

import { Header, Container, Panel } from './style';

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
					aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa
					aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa
					aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa
					aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa
					aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa
					aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa
					aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa
					aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa
				</Panel>
			</Container>
		</Header>
	);
};
