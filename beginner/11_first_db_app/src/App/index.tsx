import Header from '../components/Header';
import Footer from '../components/Footer';

import { Container, Main, LeftCenter, RightCenter } from './style';

const App = () => {
	// eslint-disable-next-line
	if (true) {
		//
	}

	return (
		<>
			<Header />
			<Container>
				<Main>
					<LeftCenter>
						<div className='result'>Result</div>
						<div className='controls'>Controls</div>
					</LeftCenter>
					<RightCenter>Execution details</RightCenter>
				</Main>
				<Footer />
			</Container>
		</>
	);
};

export default App;
