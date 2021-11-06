import styled from 'styled-components';

export const PaginationWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;
	gap: 10px;

	.numbers {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.number {
		padding: 5px 10px;
		font-size: 20px;
		color: #000;

		border: 1px solid #1d3557;
		border-radius: 8px;
	}

	.number:hover,
	.number.active {
		background-color: #1d3557;
		color: #fff;
	}
`;
