import { useState } from 'react';
import { ModalCreate } from './ModalCreate';

import { CreateButton } from './styles';

export const Create = () => {
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => setShowModal(false);

	return (
		<>
			<ModalCreate show={showModal} closeModal={closeModal} />
			<CreateButton onClick={() => setShowModal(true)}>Create</CreateButton>
		</>
	);
};
