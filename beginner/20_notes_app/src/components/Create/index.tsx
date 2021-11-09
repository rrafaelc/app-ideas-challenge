import { useState } from 'react';
import { ModalCreate } from './ModalCreate';

import { CreateButton } from './styles';

type Notes = {
	id: string;
	date: string;
	time: number;
	content: string;
};

type Props = {
	onCreate: (notes: Notes[]) => void;
};

export const Create = ({ onCreate }: Props) => {
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => setShowModal(false);

	return (
		<>
			<ModalCreate
				show={showModal}
				onCreate={onCreate}
				closeModal={closeModal}
			/>
			<CreateButton onClick={() => setShowModal(true)}>Create</CreateButton>
		</>
	);
};
