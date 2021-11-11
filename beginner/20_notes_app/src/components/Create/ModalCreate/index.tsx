import { useState, ChangeEvent, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ModalContainer, ModalContentLeft, ModalContentRight } from './styles';
import { Markdown } from '../../../services/Markdown';

type Notes = {
	id: string;
	date: string;
	content: string;
};

type Props = {
	show: boolean;
	onCreate: (notes: Notes[]) => void;
	closeModal: () => void;
};

export const ModalCreate = ({ show, onCreate, closeModal }: Props) => {
	const ref = useRef<HTMLDivElement>(null);

	const [textArea, setTextArea] = useState('');

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setTextArea(event.target.value);

		if (ref.current) {
			ref.current.scrollTop = ref.current.scrollHeight;
		}
	};

	const handleClose = () => {
		setTextArea('');
		closeModal();
	};

	const handleOnSave = () => {
		const currentDate = new Date();

		const id = uuidv4();
		const date = currentDate.toLocaleString();
		const content = textArea;

		const notes: Notes = { id, date, content };

		const notesArray = JSON.parse(
			localStorage.getItem('@rrafaelc:notes-app') || '[]',
		);

		const newNotesArray = [...notesArray, notes];
		localStorage.setItem('@rrafaelc:notes-app', JSON.stringify(newNotesArray));

		onCreate(newNotesArray);
		setTextArea('');
		closeModal();
	};

	return (
		<ModalContainer isOpen={show}>
			<ModalContentLeft>
				<textarea
					value={textArea}
					onChange={handleChange}
					placeholder='Enter in markdown'
				/>
				<div className='btns'>
					<button type='button' id='cancel' onClick={handleClose}>
						Cancel
					</button>
					<button type='button' id='save' onClick={handleOnSave}>
						Save
					</button>
				</div>
			</ModalContentLeft>
			<ModalContentRight>
				<p id='title'>Preview</p>
				<div ref={ref} id='preview'>
					<Markdown text={textArea} />
				</div>
			</ModalContentRight>
		</ModalContainer>
	);
};
