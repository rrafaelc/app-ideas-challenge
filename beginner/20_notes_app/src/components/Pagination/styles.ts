import styled from 'styled-components';

// solution link:
// https://github.com/AdeleD/react-paginate/issues/321#issuecomment-702051168

export const PaginationWrapper = styled.div`
	li {
		list-style: none;
		cursor: pointer;
	}

	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 50px;
		gap: 10px;
	}

	.previous,
	.next {
		display: flex;
		justify-content: center;
		align-items: center;

		transition: color 0.2s;
	}

	.previous:hover,
	.next:hover {
		color: #e63946;
	}

	.break-me {
		cursor: default;
	}

	.page-item {
		font-size: 20px;
		color: #1d3557;

		border-radius: 8px;
	}

	.page-link {
		display: block;
		border: 1px solid #1d3557;
		border-radius: 8px;

		padding: 5px 10px;
	}

	.page-link:hover {
		transition: all 0.2s;
	}

	.active,
	.page-link:hover {
		background-color: #1d3557;
		color: #fff;
	}
`;
