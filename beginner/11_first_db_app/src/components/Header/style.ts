import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
	background: #323232;
`;

export const Container = styled.div`
	max-width: 1320px;

	margin: 0 auto;
	height: 46px;
	padding: 0 20px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	.logo {
		font-size: 18px;
		color: #dcdcdc;
	}

	.icons {
		display: flex;
		align-items: center;

		svg {
			fill: #dcdcdc;
			font-size: 30px;

			display: flex;
			align-items: center;

			transition: fill 0.2s;
		}

		svg:hover {
			fill: ${shade(0.2, '#dcdcdc')};
		}

		button {
			margin-left: 40px;
			background-color: transparent;
		}
	}
`;
