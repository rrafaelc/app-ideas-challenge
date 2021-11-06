import styled from 'styled-components';

export const Header = styled.header`
	width: 100%;
	height: 50px;

	color: #f1faee;
	background: #1d3557;

	display: flex;
	align-items: center;
	justify-content: center;

	h1 {
		font-size: 20px;
	}
`;

export const Container = styled.main`
	max-width: 800px;
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Content = styled.div`
	width: 100%;
	max-width: 800px;

	display: flex;
	flex-direction: column;
	gap: 50px;
	margin-bottom: 50px;
`;
