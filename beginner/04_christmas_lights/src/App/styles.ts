import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Lights = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Controls = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;

  position: absolute;
  bottom: 0;
  padding-bottom: 20px;
`;
