import { ChangeEvent, useState, useRef } from 'react';
import { ModalContainer, ModalContentLeft, ModalContentRight } from './styles';

import { Markdown } from '../../../services/Markdown';

type ModalProps = {
	id: string;
	text: string;
	show: boolean;
	closeModal: () => void;
	onSave: (id: string, text: string) => void;
};

export const ModalEdit = ({
	id,
	text,
	show,
	closeModal,
	onSave,
}: ModalProps) => {
	const ref = useRef<HTMLDivElement>(null);

	const [textArea, setTextArea] = useState(text);

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setTextArea(event.target.value);

		if (ref.current) {
			ref.current.scrollTop = ref.current.scrollHeight;
		}
	};

	const handleClose = () => {
		setTextArea(text);
		closeModal();
	};

	const handleSave = () => {
		onSave(id, textArea);
	};

	return (
		<ModalContainer isOpen={show}>
			<ModalContentLeft>
				<textarea value={textArea} onChange={handleChange} />
				<div className='btns'>
					<button type='button' id='cancel' onClick={handleClose}>
						Cancel
					</button>
					<button type='button' id='save' onClick={handleSave}>
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
