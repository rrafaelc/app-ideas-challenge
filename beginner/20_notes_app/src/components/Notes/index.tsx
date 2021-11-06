import { FiEdit, FiTrash2 } from 'react-icons/fi';

import { NotesContainer, Content } from './styles';
import { Markdown } from '../../services/Markdown';

import { useModal } from '../../context/ModalContext';

export const Notes = () => {
	const { toggle } = useModal();

	return (
		<NotesContainer>
			<header>
				<p>Created at 2021-11-04 22:18:22</p>
				<div className='icons'>
					<FiEdit size={24} onClick={toggle} />
					<FiTrash2 size={24} />
				</div>
			</header>
			<Content>
				<Markdown />
			</Content>
		</NotesContainer>
	);
};
