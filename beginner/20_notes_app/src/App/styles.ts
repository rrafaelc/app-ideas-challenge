import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
	width: 100%;
	height: 50px;

	color: #f1faee;
	background: #1d3557;

	display: flex;
	align-items: center;
	justify-content: center;

	h1 {
		font-size: 20px;
	}
`;

export const Container = styled.main`
	max-width: 800px;
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	align-items: center;

	#createbtn {
		align-self: flex-end;

		margin: 30px 0;
		width: 120px;
		padding: 10px 0;
		border-radius: 10px;

		background-color: #e63946;
		color: #fff;
		font-size: 20px;

		transition: background-color 0.2s;
	}

	#createbtn:hover {
		background-color: ${shade(0.2, '#e63946')};
	}

	#createbtn:active {
		transform: scale(0.95);
	}
`;

export const Content = styled.div`
	width: 100%;
	max-width: 800px;

	display: flex;
	flex-direction: column;
	gap: 50px;
	margin-bottom: 50px;
`;
