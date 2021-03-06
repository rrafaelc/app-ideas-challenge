import styled, { css } from 'styled-components';
import { shade } from 'polished';

type ColorProps = {
	active: boolean;
};

export const Container = styled.div<ColorProps>`
	z-index: 100;
	.status {
		margin-bottom: 8px;
		font-size: 14px;
		user-select: none;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3px;
	}

	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}

	button {
		user-select: none;
		font-size: 18px;
		padding: 10px 40px;
		border-radius: 15px;

		&.loading {
			pointer-events: none;
			background-color: #000;
		}
	}

	.dot,
	button {
		background-color: ${props => (props.active ? '#00D415' : '#ff0040')};

		transition: background-color 0.2s;
	}

	button:disabled {
		color: #fff;
		pointer-events: none;
	}

	button:hover {
		${props =>
			props.active
				? css`
						background-color: ${shade(0.4, '#00D415')};
				  `
				: css`
						background-color: ${shade(0.4, '#FF0040')};
				  `};
	}
`;
