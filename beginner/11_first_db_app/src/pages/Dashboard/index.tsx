import Header from '../../components/Header';
import Result from '../../components/Result';
import Controls from '../../components/Controls';
import Footer from '../../components/Footer';

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
						<Controls />
					</LeftCenter>
					<RightCenter>Execution details</RightCenter>
				</Main>
				<Footer />
			</Container>
		</>
	);
};

export default App;
