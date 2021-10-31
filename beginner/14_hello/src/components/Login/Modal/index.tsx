import { useRef, useState } from 'react';

import './styles.css';

type ModalProps = {
	handleCode: (code: string) => void;
	toggleModal: () => void;
};

const codes: string[] = [
	'ar',
	'az',
	'be',
	'bg',
	'bn',
	'br',
	'bs',
	'cs',
	'da',
	'de',
	'dz',
	'el',
	'en',
	'en-gb',
	'en-us',
	'es',
	'et',
	'fa',
	'fi',
	'fil',
	'fr',
	'he',
	'hi',
	'hr',
	'hu',
	'hy',
	'id',
	'is',
	'it',
	'ja',
	'ka',
	'kk',
	'km',
	'ko',
	'lb',
	'lo',
	'lt',
	'lv',
	'mk',
	'mn',
	'ms',
	'my',
	'ne',
	'no',
	'pl',
	'pt',
	'ro',
	'ru',
	'sk',
	'sl',
	'sq',
	'sr',
	'sv',
	'sw',
	'th',
	'tk',
	'uk',
	'vi',
	'zh',
];

export const Modal = ({ handleCode, toggleModal }: ModalProps) => {
	const itemRef = useRef<Array<HTMLDivElement | null>>([]);
	const [code, setCode] = useState('');

	const handleItemClick = (kode: string) => {
		if (itemRef.current) {
			itemRef.current.forEach(item => {
				if (item!.textContent === kode) {
					setCode(kode);
					item!.classList.add('active');
				} else {
					item!.classList.remove('active');
				}
			});
		}
	};

	const handleSubmit = () => {
		handleCode(code);
		toggleModal();
	};

	const handleCancel = () => {
		handleCode('');
		toggleModal();
	};

	return (
		<div className='modalContainer'>
			<div className='modal'>
				<p className='modalTitle'>Select a Language Code</p>

				<div className='modalItems'>
					{codes.map((code, i) => (
						<div
							key={code}
							tabIndex={0}
							role='button'
							className='modalItem'
							ref={item => {
								itemRef.current[i] = item;
							}}
							onKeyDown={() => handleItemClick(code)}
							onClick={() => handleItemClick(code)}
						>
							{code}
						</div>
					))}
				</div>

				<div className='modalButtons'>
					<button type='button' onClick={handleCancel}>
						Cancel
					</button>
					<button type='button' onClick={handleSubmit}>
						Ok
					</button>
				</div>
			</div>
		</div>
	);
};
