import { useEffect, useState } from 'react';
import { Container, Header, Content } from './styles';
import { Notes } from '../components/Notes';
import { Pagination } from '../components/Pagination';
import { Create } from '../components/Create';

type NotesProps = {
	id: string;
	date: string;
	time: number;
	content: string;
};

export const App = () => {
	const [notes, setNotes] = useState<NotesProps[]>([]);

	const handleOnCreate = (notes: NotesProps[]) => {
		setNotes(notes);
	};

	useEffect(() => {
		const notes = localStorage.getItem('@rrafaelc:notes-app');
		if (notes) {
			setNotes(JSON.parse(notes));
		} else {
			setNotes([]);
		}
	}, []);

	return (
		<>
			<Header>
				<h1>Notes App</h1>
			</Header>
			<Container>
				<Create onCreate={handleOnCreate} />
				<Content>
					<Notes id='asfafa' />
					<Notes id='asfafa' />
					<Notes id='asfafa' />
				</Content>
			</Container>
			<Pagination />
		</>
	);
};
