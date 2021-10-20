import Header from '../components/Header';
import Footer from '../components/Footer';
import Result from '../components/Result';

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
						<Result />
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
