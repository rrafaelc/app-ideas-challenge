import { useState, MouseEvent } from 'react';

import { Modal } from './Modal';

import checkedSvg from '../../assets/checked.svg';
import uncheckedSvg from '../../assets/unchecked.svg';

import './styles.css';

export const Login = () => {
	const [showModal, setShowModal] = useState(true);
	const [codeLanguage, setCodeLanguage] = useState('');

	const toggleModal = () => setShowModal(!showModal);

	const handleCode = (code: string) => {
		setCodeLanguage(code);
	};

	const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
	};

	return (
		<div className='container'>
			<h1 className='logoutMessage'>Have a great day Rafael Costa!</h1>
			<h1 className='title'>Login</h1>
			<form>
				<label htmlFor='userName'>Username</label>
				<input id='userName' name='userName' placeholder='Enter username' />

				<label htmlFor='password'>Password</label>
				<input id='password' name='password' placeholder='Enter password' />

				<div className='languageCode'>
					<div
						className='optional'
						role='button'
						tabIndex={0}
						onKeyDown={toggleModal}
						onClick={toggleModal}
					>
						<img
							src={codeLanguage ? checkedSvg : uncheckedSvg}
							alt={codeLanguage ? 'checked ' : 'unchecked'}
							width='12'
							height='12'
						/>
						Choose a language (Optional)
					</div>
					{codeLanguage && (
						<div
							className='codeChoosed'
							role='button'
							tabIndex={0}
							onKeyDown={toggleModal}
							onClick={toggleModal}
						>
							{codeLanguage}
						</div>
					)}
				</div>

				{showModal && (
					<Modal handleCode={handleCode} toggleModal={toggleModal} />
				)}
				<button className='loginButton' type='submit' onClick={handleSubmit}>
					Login
				</button>
			</form>
		</div>
	);
};
