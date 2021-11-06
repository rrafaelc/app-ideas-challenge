import React, { createContext, useState } from 'react';

const ModalContext = createContext({
	isOpen: false,
	toggle: () => {},
});

const ModalProvider: React.FC = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<ModalContext.Provider value={{ isOpen, toggle }}>
			{children}
		</ModalContext.Provider>
	);
};

export function useModal() {
	const context = React.useContext(ModalContext);

	if (!context) {
		throw new Error('useModal must be used within a ModalProvider');
	}

	const { isOpen, toggle } = context;
	return { isOpen, toggle };
}

export default ModalProvider;
