import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1320px;
	margin: 0 auto;
	padding: 0 20px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Main = styled.main`
	flex-grow: 1;
	margin-top: 30px;

	display: flex;
	justify-content: center;
`;

export const LeftCenter = styled.div`
	margin-right: 20px;
	width: 684px;
`;

export const RightCenter = styled.div`
	width: 375px;
	height: 536px;
	background: #323232;

	border-radius: 5px;
	box-shadow: 5px 5px 10px 0 #000;
`;
