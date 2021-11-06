import { Container, Header, Content } from './styles';
import { Notes } from '../components/Notes';
import { Pagination } from '../components/Pagination';

import { useModal } from '../context/ModalContext';
import { Modal } from '../components/Modal';

export const App = () => {
	const { toggle } = useModal();

	return (
		<>
			<Modal />
			<Header>
				<h1>Notes App</h1>
			</Header>
			<Container>
				<button type='button' id='createbtn' onClick={toggle}>
					Create
				</button>
				<Content>
					<Notes />
					<Notes />
					<Notes />
				</Content>
			</Container>
			<Pagination />
		</>
	);
};
