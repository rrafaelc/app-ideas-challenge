import styled from 'styled-components';
import { shade } from 'polished';

export const CreateButton = styled.button`
	align-self: flex-end;

	margin: 30px 0;
	width: 120px;
	padding: 10px 0;
	border-radius: 10px;

	background-color: #e63946;
	color: #fff;
	font-size: 20px;

	transition: background-color 0.2s;

	&:hover {
		background-color: ${shade(0.2, '#e63946')};
	}

	&:active {
		transform: scale(0.95);
	}
`;
