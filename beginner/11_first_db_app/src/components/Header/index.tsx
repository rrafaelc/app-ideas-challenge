import { useEffect, useRef, useState } from 'react';
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
	const notificationContainerRef = useRef<HTMLDivElement | null>(null);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (notificationContainerRef.current) {
			const element = notificationContainerRef.current;

			element.scroll({
				top: element.scrollHeight,
				left: 0,
				behavior: 'smooth',
			});
		}
	}, [notifications]);

	return (
		<header style={{ background: '#323232' }}>
			<Container>
				<span className='logo'>indexedDB App</span>
				<div className='icons'>
					<a
						href='https://github.com/rrafaelc/app-ideas-challenge'
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

					<div className='notifications' ref={notificationContainerRef}>
						{notifications.map(notification => (
							<p key={Math.random().toString(36).substr(2, 9)}>
								{notification.msg}
							</p>
						))}
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
