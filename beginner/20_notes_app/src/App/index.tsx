import { useEffect, useRef, useState } from 'react';
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
	const ref = useRef<HTMLDivElement>(null);
	const [notes, setNotes] = useState<NotesProps[]>([]);
	const [pageNumber, setPageNumber] = useState(0);

	const notesPerPage = 5;
	const indexPage = pageNumber * notesPerPage;
	const pageCount = Math.ceil(notes.length / notesPerPage);

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

	const displayNotes = notes
		.slice(indexPage, indexPage + notesPerPage)
		.map(note => (
			<Note
				key={note.id}
				id={note.id}
				date={note.date}
				content={note.content}
				onUpdate={handleOnUpdate}
			/>
		));

	const onPageChange = (event: any) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}

		setPageNumber(event.selected);
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
			<Header ref={ref}>
				<h1>Notes App</h1>
			</Header>
			<Container>
				<Create onCreate={handleOnCreate} />
				<Content>{displayNotes}</Content>
			</Container>
			{notes.length > 0 && (
				<Pagination pageCount={pageCount} onPageChange={onPageChange} />
			)}
		</>
	);
};
