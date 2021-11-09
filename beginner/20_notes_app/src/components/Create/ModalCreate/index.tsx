import { useState, ChangeEvent } from 'react';

import { ModalContainer, ModalContentLeft, ModalContentRight } from './styles';
import { Markdown } from '../../../services/Markdown';

type Props = {
	show: boolean;
	closeModal: () => void;
};

export const ModalCreate = ({ show, closeModal }: Props) => {
	const [textArea, setTextArea] = useState('');

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setTextArea(event.target.value);
	};

	return (
		<ModalContainer isOpen={show}>
			<ModalContentLeft>
				<textarea
					value={textArea}
					onChange={handleChange}
					placeholder='Enter in markdown text or normal text'
				/>
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
