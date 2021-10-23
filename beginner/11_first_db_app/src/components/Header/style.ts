import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
	background: #323232;
`;

export const Container = styled.div`
	position: relative;

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

export const Panel = styled.div`
	height: 388px;
	border-radius: 6px;
	background: #323232;
	border: 1px solid #fff;

	position: absolute;
	top: 56px;
	right: 10px;

	display: flex;
	flex-direction: column;
	z-index: 100;

	/*
    The way I want to hide and show the notication,
    the width needs to be 0, to not affect the body element
  */
	width: 0;
	transform: translateX(30vw);
	opacity: 0;

	transition: all 0.5s;

	&.active {
		width: 208px;
		transform: translateX(0px);
		opacity: 1;
	}

	.panel {
		display: flex;
		align-items: center;
		justify-content: space-between;

		border-bottom: 1px solid #fff;

		span {
			margin-left: 12px;
		}

		.close {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 12px;
			background-color: transparent;
		}
	}

	.text {
		flex: 1;

		padding: 10px 8px 10px 15px;
		margin-right: 3px; // When scrollbar show

		overflow-y: auto;
	}

	p {
		display: flex;
		flex-wrap: wrap;
		word-break: break-all;
		margin-bottom: 5px;
	}
`;

export const ClickOutsidePanel = styled.div`
	// A little trick if the user click outside notification panel
	position: absolute;
	width: 100%;
	height: calc(100% - 46px);

	visibility: hidden;
	background-color: transparent;

	&.active {
		visibility: visible;
	}
`;
