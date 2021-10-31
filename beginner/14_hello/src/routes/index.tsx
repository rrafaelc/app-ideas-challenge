import { Login } from '../components/Login';
import { Info } from '../components/Info';

import { useUserLogin } from '../context/UserInfo';

export const Route = () => {
	const { isLoggedIn } = useUserLogin();

	return isLoggedIn ? <Info /> : <Login />;
};
