import styled from 'styled-components';

export const NotesContainer = styled.div`
	width: 100%;
	border-radius: 20px;
	box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.5);
	background-color: #f1faee;

	header {
		padding: 0 20px;
		height: 40px;

		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #e63946;
		color: #fff;

		border-radius: 20px 20px 0 0;

		p {
			font-size: 20px;
		}

		.icons {
			cursor: pointer;
			display: flex;
			align-items: center;
			gap: 20px;

			svg:hover {
				stroke: #1d3557;
				transition: stroke 0.2s;
			}
		}
	}
`;

export const Content = styled.div`
	padding: 20px;
`;
