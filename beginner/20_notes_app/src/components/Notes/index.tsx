import { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import { NotesContainer, Content } from './styles';
import { Markdown } from '../../services/Markdown';

import { ModalEdit } from './ModalEdit';

type Props = {
	id: string;
};

export const Notes = ({ id }: Props) => {
	const [markdownText, setMarkdownText] = useState('**MarkDown Test**');
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => setShowModal(false);

	return (
		<NotesContainer>
			<ModalEdit show={showModal} text='Note Text' closeModal={closeModal} />
			<header>
				<p>Created at 2021-11-04 22:18:22</p>
				<div className='icons'>
					<FiEdit size={24} onClick={() => setShowModal(true)} />
					<FiTrash2 size={24} />
				</div>
			</header>
			<Content>
				<Markdown text={markdownText} />
			</Content>
		</NotesContainer>
	);
};
