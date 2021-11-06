import { shade } from 'polished';
import styled from 'styled-components';

type ModalProps = {
	isOpen: boolean;
};

export const ModalContainer = styled.div<ModalProps>`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);

	position: fixed;
	top: 0;
	left: 0;

	z-index: 9999;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;

	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	transition: all 0.3s ease-in-out;
`;

export const ModalContentLeft = styled.div`
	width: 600px;
	height: 600px;
	background: #fff;
	border-radius: 10px;
	padding: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

	display: flex;
	flex-direction: column;

	textarea {
		width: 100%;
		height: 100%;
		border: 1px solid #000;
		padding: 10px;
		resize: none;
		background: #fff;
	}

	.btns {
		margin: 25px 0;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 30px;

		button {
			width: 120px;
			padding: 8px 0;
			font-size: 18px;
			border-radius: 10px;
		}

		button:active {
			transform: scale(0.95);
		}

		#cancel {
			background: transparent;
			border: 1px solid #e63946;
			color: #000;
		}

		#save {
			background: #e63946;
			color: #fff;
			border: 1px solid #e63946;

			transition: background-color 0.2s;
		}

		#save:hover {
			background: ${shade(0.2, '#e63946')};
		}
	}
`;

export const ModalContentRight = styled.div`
	width: 600px;
	height: 600px;
	background: #fff;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

	#title {
		font-size: 20px;
		font-weight: bold;
		padding: 10px 0;
		text-align: center;
		background-color: #e63946;
		color: #fff;
		border-radius: 10px 10px 0 0;
	}

	#preview {
		padding: 20px;
		width: 100%;
		height: 90%;
		overflow-y: auto;
	}
`;
