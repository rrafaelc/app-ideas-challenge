import './styles.css';

export const Info = () => (
	<div className='infoContainer'>
		<p>
			<span className='hello'>Olá</span> Rafael Costa
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

		<button type='button'>Logout</button>
	</div>
);
