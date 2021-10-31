import { useEffect, useState, createElement } from 'react';
import './styles.css';

import { useUserInfo, useUserLogin } from '../../context/UserInfo';

type Region = {
	ip: string;
	city: string;
	region: string;
	country_name: string;
	postal: string; // zip
	longitude: number;
	latitude: number;
	timezone: string;
};

export const Info = () => {
	const [loading, setLoading] = useState(true);
	const [hello, setHello] = useState('');
	const { codeLanguage, username } = useUserInfo();
	const [region, setRegion] = useState<Region>({} as Region);

	const [helloError, setHelloError] = useState(false);

	const { setIsLoggedIn } = useUserLogin();

	// https://stackoverflow.com/questions/42361689/implement-html-entity-decode-in-react-js
	const renderHTML = (rawHTML: string) =>
		createElement('span', {
			dangerouslySetInnerHTML: { __html: rawHTML },
			className: 'hello',
		});

	useEffect(() => {
		const fetchData = async () => {
			await Promise.all([
				fetch(
					codeLanguage
						? `https://fourtonfish.com/hellosalut/?lang=${codeLanguage}`
						: 'https://fourtonfish.com/hellosalut/?mode=auto',
				)
					.then(response => response.json())
					.then(data => {
						setHello(data.hello);
					})
					.catch(() => {
						setHelloError(true);
						alert('An error occurred while processing your request.');
					}),
				fetch(`https://ipapi.co/json/`)
					.then(response => response.json())
					.then(data => {
						setRegion(data);
					})
					.catch(() => {
						alert('An error occurred while processing your request.');
					}),
			]);

			setLoading(false);
		};

		fetchData();
	}, [codeLanguage]);

	return loading ? (
		<div className='loading'>
			<div className='loading__spin' />
			<div className='loading__text'>Loading</div>
		</div>
	) : (
		<div className='infoContainer'>
			{helloError ? (
				<p>
					<span className='hello'>Error</span> {username}
				</p>
			) : (
				<p>
					{renderHTML(hello)} {username}
				</p>
			)}
			<p>you have successfully logged in!</p>

			<div className='info'>
				<p>
					Info provided by{' '}
					<a
						href='http://ip-api.com/json/'
						target='_blank'
						rel='noopener noreferrer'
					>
						IP-API
					</a>
				</p>
				<p>IP address: {region.ip || 'Error'}</p>
				<p>City: {region.city || 'Error'}</p>
				<p>Region: {region.region || 'Error'}</p>
				<p>Country: {region.country_name || 'Error'}</p>
				<p>Zip Code: {region.postal || 'Error'}</p>
				<p>Longitude: {region.longitude || 'Error'}</p>
				<p>Latitude: {region.latitude || 'Error'}</p>
				<p>Timezone: {region.timezone || 'Error'}</p>
			</div>

			<button type='button' onClick={() => setIsLoggedIn(false)}>
				Logout
			</button>
		</div>
	);
};
