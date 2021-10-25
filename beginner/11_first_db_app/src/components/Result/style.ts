import styled from 'styled-components';

export const Container = styled.div`
	height: 368px;
	padding: 10px;
	background: #323232;

	outline: 1px solid #323232;
	border-radius: 5px;
	box-shadow: 5px 5px 10px 0 #000;

	.result {
		height: 100%;
		background-color: #0b0a0a;
		border-radius: 5px;
		padding: 20px 10px;

		overflow: auto;

		&.loading {
			display: none;
		}

		table {
			margin: 0 auto;
			border-collapse: collapse;
			text-align: center;
			font-size: 12px;
		}

		tr {
			.userid {
				padding: 2px 10px;
			}
			.name {
				padding: 2px 52px;
			}
			.email {
				padding: 2px 74px;
			}
			.order {
				padding: 2px 29px;
			}
			.sales {
				padding: 2px 15px;
			}
			.norows {
				padding: 2px 12px;
			}
		}

		td {
			border: 1px solid #fff;
			border-right: 0;
			padding: 5px 0;

			&:last-child {
				border-right: 1px solid #fff;
			}
		}
	}
`;
