import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;

	display: flex;
	flex-direction: column;

	.header {
		height: 50px;
		padding-left: 20px;

		font-size: 18px;
		background: #a81c1c;

		display: flex;
		align-items: center;

		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	.logs {
		flex: 1;
		overflow-y: auto;

		margin-top: 25px;
		padding: 0 20px;
		font-size: 12px;
	}
`;

export const Log = styled.div`
	margin-bottom: 10px;

	display: flex;
	gap: 10px;

	.date {
		align-self: flex-end;
		color: #bebebe;
	}

	.function {
		color: #0fec75;
	}

	.error {
		color: #ff0040;
	}
`;
