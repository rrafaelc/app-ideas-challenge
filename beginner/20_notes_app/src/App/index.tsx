import { Container, Header, Content } from './styles';
import { Notes } from '../components/Notes';
import { Pagination } from '../components/Pagination';
import { Create } from '../components/Create';

export const App = () => (
	<>
		<Header>
			<h1>Notes App</h1>
		</Header>
		<Container>
			<Create />
			<Content>
				<Notes id='asfafa' />
				<Notes id='asfafa' />
				<Notes id='asfafa' />
			</Content>
		</Container>
		<Pagination />
	</>
);
