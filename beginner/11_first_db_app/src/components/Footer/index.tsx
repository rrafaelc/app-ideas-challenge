import { useEffect, useState } from 'react';
import { Footer } from './style';

export default () => {
	// By default not show the consent footer
	const [showConsent, setShowConsent] = useState(false);

	const handleButtonClick = () => {
		if (showConsent) {
			setShowConsent(false);
			const storage = localStorage.getItem('@rrafaelc:indexeddb');

			if (storage) {
				const parse = JSON.parse(storage);

				const consent = {
					...parse,
					consent: true,
				};

				localStorage.setItem('@rrafaelc:indexeddb', JSON.stringify(consent));
			} else {
				localStorage.setItem(
					'@rrafaelc:indexeddb',
					JSON.stringify({ consent: true }),
				);
			}
		}
	};

	useEffect(() => {
		const storage = localStorage.getItem('@rrafaelc:indexeddb');

		if (storage) {
			const { consent } = JSON.parse(storage);

			// If consent undefined then show consent footer
			if (!consent) {
				setShowConsent(true);
			}
		} else {
			// If storage is undefined then show consent footer
			setShowConsent(true);
		}
	}, []);

	return (
		<Footer className={showConsent ? 'show' : ''}>
			<p>
				No data is collected or sent to a server, all data is client-side only,
				data used is for educational purposes.
			</p>
			<button type='button' onClick={handleButtonClick}>
				OK
			</button>
		</Footer>
	);
};
