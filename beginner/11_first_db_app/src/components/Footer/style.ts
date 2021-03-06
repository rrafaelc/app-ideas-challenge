import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.footer`
	margin: 20px 0;
	width: 937px;
	height: 40px;
	background-color: #323232;

	font-size: 18px;
	border-radius: 10px;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 17px;

	display: none;

	&.show {
		display: flex;
	}

	button {
		z-index: 100;
		padding: 3px 20px;
		border-radius: 9px;

		font-size: 14px;
		font-weight: bold;

		background: #fee440;
		color: #000;

		transition: background-color 0.2s;
	}

	button:hover {
		background-color: ${shade(0.4, '#fee440')};
	}
`;
