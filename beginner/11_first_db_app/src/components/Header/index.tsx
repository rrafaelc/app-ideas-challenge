import { FaGithubAlt, FaBell } from 'react-icons/fa';

import { Header, Container } from './style';

export default () => (
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
				<button type='button' title='Notification panel'>
					<FaBell />
				</button>
			</div>
		</Container>
	</Header>
);
