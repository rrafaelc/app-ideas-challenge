import UserInfoProvider from './context/UserInfo';
import { Route } from './routes';

import './styles.css';

export const App = () => (
	<UserInfoProvider>
		<Route />
	</UserInfoProvider>
);
