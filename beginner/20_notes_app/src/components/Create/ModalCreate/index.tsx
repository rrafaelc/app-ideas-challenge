import { useState, ChangeEvent, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ModalContainer, ModalContentLeft, ModalContentRight } from './styles';
import { Markdown } from '../../../services/Markdown';

type Notes = {
	id: string;
	date: string;
	time: number;
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

	const handleOnSave = () => {
		const currentDate = new Date();

		// Separate in two variables - 0000-00-00 00:00:00
		const d1 = currentDate.toISOString().split('T')[0];
		const d2 = currentDate.toISOString().split('T')[1].split('.')[0];

		const id = uuidv4();
		const date = `${d1} ${d2}`;
		const time = currentDate.getTime();
		const content = textArea;

		const notes: Notes = { id, date, time, content };

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
					<button type='button' id='cancel' onClick={closeModal}>
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
