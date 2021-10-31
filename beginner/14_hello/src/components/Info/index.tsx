import { useEffect, useState, createElement } from 'react';
import './styles.css';

import { useUserInfo, useUserLogin } from '../../context/UserInfo';

export const Info = () => {
	const [loading, setLoading] = useState(true);
	const [hello, setHello] = useState('');

	const { codeLanguage, username } = useUserInfo();
	const { setIsLoggedIn } = useUserLogin();

	// https://stackoverflow.com/questions/42361689/implement-html-entity-decode-in-react-js
	const renderHTML = (rawHTML: string) =>
		createElement('span', {
			dangerouslySetInnerHTML: { __html: rawHTML },
			className: 'hello',
		});

	useEffect(() => {
		fetch(
			codeLanguage
				? `https://fourtonfish.com/hellosalut/?lang=${codeLanguage}`
				: 'https://fourtonfish.com/hellosalut/?mode=auto',
		)
			.then(response => response.json())
			.then(data => {
				setHello(data.hello);
				setLoading(false);
			})
			.catch(err => {
				console.error(err);
				alert('An error occurred while processing your request');
			});
	}, []);

	return loading ? (
		<div className='loading'>
			<div className='loading__spin' />
			<div className='loading__text'>Loading</div>
		</div>
	) : (
		<div className='infoContainer'>
			<p>
				{renderHTML(hello)} {username}
			</p>
			<p>you have successfully logged in!</p>

			<div className='info'>
				<p>
					Info provided by <a href='/'>IP-API</a>
				</p>
				<p>IP address: 192.168.0.1</p>
				<p>City: Sao Paulo</p>
				<p>Region: SP</p>
				<p>Country: Brazil</p>
				<p>Zip Code: 11111</p>
				<p>Longitude: -58.1687</p>
				<p>Latitude: -12.2061</p>
				<p>Timezone: America/Sao_Paulo</p>
			</div>

			<button type='button' onClick={() => setIsLoggedIn(false)}>
				Logout
			</button>
		</div>
	);
};
