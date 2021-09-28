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

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  position: relative;
  width: 300px;
  height: 100px;
  border: 2px solid #fff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  color: #000;
  z-index: 2;
`;

export const Close = styled.button`
  background-color: #fff;
  position: absolute;
  right: 0;

  border-radius: inherit;

  padding: 10px;
  font-weight: bold;
  font-size: 1rem;
`;

export const Message = styled.p`
  width: 200px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
  font-weight: bold;
`;
