import { ChangeEvent, useState } from 'react';
import { ModalContainer, ModalContentLeft, ModalContentRight } from './styles';

import { Markdown } from '../../../services/Markdown';

type ModalProps = {
	text: string;
	show: boolean;
	closeModal: () => void;
};

export const ModalEdit = ({ text, show, closeModal }: ModalProps) => {
	const [textArea, setTextArea] = useState(text);

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setTextArea(event.target.value);
	};

	return (
		<ModalContainer isOpen={show}>
			<ModalContentLeft>
				<textarea value={textArea} onChange={handleChange} />
				<div className='btns'>
					<button type='button' id='cancel' onClick={closeModal}>
						Cancel
					</button>
					<button type='button' id='save'>
						Save
					</button>
				</div>
			</ModalContentLeft>
			<ModalContentRight>
				<p id='title'>Preview</p>
				<div id='preview'>
					<Markdown text={textArea} />
				</div>
			</ModalContentRight>
		</ModalContainer>
	);
};
