import { useState } from 'react';
import { Container, Header, Content } from './styles';
import { Notes } from '../components/Notes';
import { Pagination } from '../components/Pagination';

import { ModalCreate } from './ModalCreate';

export const App = () => {
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => setShowModal(false);

	return (
		<>
			<ModalCreate show={showModal} closeModal={closeModal} />
			<Header>
				<h1>Notes App</h1>
			</Header>
			<Container>
				<button type='button' id='createbtn' onClick={() => setShowModal(true)}>
					Create
				</button>
				<Content>
					<Notes id='asfafa' />
					<Notes id='asfafa' />
					<Notes id='asfafa' />
				</Content>
			</Container>
			<Pagination />
		</>
	);
};
