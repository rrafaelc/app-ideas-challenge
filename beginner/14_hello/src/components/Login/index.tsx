import { useState, useRef } from 'react';

import { Modal } from './Modal';

import { useUserInfo, useUserLogin } from '../../context/UserInfo';

import checkedSvg from '../../assets/checked.svg';
import uncheckedSvg from '../../assets/unchecked.svg';

import './styles.css';

export const Login = () => {
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const [showModal, setShowModal] = useState(false);
	const [codeLanguage, setCodeLanguage] = useState('');

	const { username, setUsername } = useUserInfo();
	const { setIsLoggedIn } = useUserLogin();

	const toggleModal = () => setShowModal(!showModal);

	const handleCode = (code: string) => {
		setCodeLanguage(code);
	};

	const clearInputsErrors = () => {
		usernameRef.current!.classList.remove('error');
		passwordRef.current!.classList.remove('error');
	};

	const handleSubmit = () => {
		const nameRef = usernameRef.current!;
		const pwRef = passwordRef.current!;

		const name = nameRef.value.trim();
		const pw = pwRef.value.trim();

		if (!name) {
			nameRef.classList.add('error');
		} else {
			nameRef.classList.remove('error');
		}

		if (!pw) {
			pwRef.classList.add('error');
		} else {
			pwRef.classList.remove('error');
		}

		if (name && pw) {
			setUsername(name);
			setIsLoggedIn(true);
		}
	};

	return (
		<div className='container'>
			{username && (
				<h1 className='logoutMessage'>Have a great day {username}!</h1>
			)}
			<h1 className='title'>Login</h1>
			<form>
				<label htmlFor='userName'>Username</label>
				<input
					ref={usernameRef}
					onFocus={clearInputsErrors}
					id='userName'
					name='userName'
					placeholder='Enter username'
				/>

				<label htmlFor='password'>Password</label>
				<input
					ref={passwordRef}
					onFocus={clearInputsErrors}
					type='password'
					id='password'
					name='password'
					placeholder='Enter password'
				/>

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
				<button className='loginButton' type='button' onClick={handleSubmit}>
					Login
				</button>
			</form>
		</div>
	);
};
