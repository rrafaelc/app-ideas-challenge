import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
`;

export const Buttons = styled.div`
  display: flex;
`;

export const Less = styled.button`
  width: 50px;

  background-color: red;

  font-size: 40px;

  display: flex;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const Display = styled.div`
  width: 50px;

  font-size: 40px;

  background-color: #fff;
  color: #000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const More = styled.button`
  width: 50px;

  background-color: green;

  font-size: 40px;

  display: flex;
  justify-content: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
