import { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import { NotesContainer, Content } from './styles';
import { Markdown } from '../../services/Markdown';

import { ModalEdit } from './ModalEdit';

type NoteProps = {
	id: string;
	date: string;
	content: string;
};

interface Props extends NoteProps {
	onUpdate: (id: string, text: string) => void;
	onDelete: (id: string) => void;
}

export const Note = ({ id, date, content, onUpdate, onDelete }: Props) => {
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => setShowModal(false);

	const handleSave = (id: string, newText: string) => {
		const oldNotes = JSON.parse(
			localStorage.getItem('@rrafaelc:notes-app') || '[]',
		);

		const findNote = oldNotes.find((note: NoteProps) => note.id === id);

		if (findNote) {
			const updateNote = {
				...findNote,
				content: newText,
			};

			const newNotes: NoteProps = oldNotes.map((note: NoteProps) => {
				if (note.id === id) {
					return updateNote;
				}
				return note;
			});

			localStorage.setItem('@rrafaelc:notes-app', JSON.stringify(newNotes));
		}

		onUpdate(id, newText);
		closeModal();
	};

	const handleDelete = () => {
		const oldNotes = JSON.parse(
			localStorage.getItem('@rrafaelc:notes-app') || '[]',
		);

		const newNotes: NoteProps = oldNotes.filter(
			(note: NoteProps) => note.id !== id,
		);

		localStorage.setItem('@rrafaelc:notes-app', JSON.stringify(newNotes));

		onDelete(id);
	};

	return (
		<NotesContainer>
			<ModalEdit
				id={id}
				show={showModal}
				text={content}
				closeModal={closeModal}
				onSave={handleSave}
			/>
			<header>
				<p>Created at {date}</p>
				<div className='icons'>
					<FiEdit size={24} onClick={() => setShowModal(true)} />
					<FiTrash2 size={24} onClick={handleDelete} />
				</div>
			</header>
			<Content>
				<Markdown text={content} />
			</Content>
		</NotesContainer>
	);
};
