import React, {
	createContext,
	useContext,
	useState,
	Dispatch,
	SetStateAction,
} from 'react';

interface UserInfoInterface {
	codeLanguage: string;
	setCodeLanguage: Dispatch<SetStateAction<string>>;

	isLoggedIn: boolean;
	setIsLoggedIn: Dispatch<SetStateAction<boolean>>;

	username: string;
	setUsername: Dispatch<SetStateAction<string>>;
}

const UserInfoContext = createContext({} as UserInfoInterface);

const UserInfoProvider: React.FC = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [codeLanguage, setCodeLanguage] = useState('');
	const [username, setUsername] = useState('');

	return (
		<UserInfoContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				codeLanguage,
				setCodeLanguage,
				username,
				setUsername,
			}}
		>
			{children}
		</UserInfoContext.Provider>
	);
};

export function useUserInfo() {
	const { username, setUsername, codeLanguage, setCodeLanguage } =
		useContext(UserInfoContext);
	if (!setUsername)
		throw new Error('useUserInfo must be used within a UserInfoProvider');
	return { username, setUsername, codeLanguage, setCodeLanguage };
}

export function useUserLogin() {
	const { isLoggedIn, setIsLoggedIn } = useContext(UserInfoContext);
	if (!setIsLoggedIn)
		throw new Error('useUserLogin must be used within a UserInfoProvider');
	return { isLoggedIn, setIsLoggedIn };
}

export default UserInfoProvider;
