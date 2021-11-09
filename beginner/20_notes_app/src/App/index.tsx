import { useEffect, useState } from 'react';
import { Container, Header, Content } from './styles';
import { Note } from '../components/Note';
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

	const handleOnUpdate = (id: string, text: string) => {
		const newNotes = notes.map(note => {
			if (note.id === id) {
				return { ...note, content: text };
			}
			return note;
		});
		setNotes(newNotes);
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
					{notes.map(note => (
						<Note
							key={note.id}
							id={note.id}
							date={note.date}
							content={note.content}
							onUpdate={handleOnUpdate}
						/>
					))}
				</Content>
			</Container>
			<Pagination />
		</>
	);
};
