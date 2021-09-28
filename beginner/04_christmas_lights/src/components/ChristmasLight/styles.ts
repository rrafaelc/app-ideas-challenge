import styled, { css } from 'styled-components';

interface CircleColorProps {
  color?: string;
  active?: boolean;
  size: number;
}

interface ModalProps {
  show: boolean;
}

interface ModalColorProps {
  colorCode: string;
}

export const Line = styled.div`
  height: 10px;

  background-color: teal;
`;

export const Light = styled.button`
  margin: 0 15px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`;

export const Base = styled.div`
  width: 15px;
  height: 15px;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  background-color: #000;
`;

export const Circle = styled.div<CircleColorProps>`
  ${(props) => css`
    width: ${props.size}px;
    height: ${props.size}px;
  `}
  border-radius: 50%;
  transition: box-shadow 0.2s;

  ${(props) => css`
    background-color: ${props.color};

    ${props.active &&
    css`
      box-shadow: 0px 0px 50px 15px ${props.color};
    `}
  `}
`;

export const ModalContainer = styled.div`
  &.active {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Modal = styled.div<ModalProps>`
  position: relative;
  width: 300px;
  height: 300px;
  border: 2px solid #fff;
  border-radius: 10px;

  ${(props) => css`
    display: ${props.show ? 'flex' : 'none'};
  `}
  flex-direction: column;
  align-items: center;

  background-color: #5f6061;
  color: #fff;
  z-index: 2;
`;

export const Close = styled.button`
  background-color: #5f6061;
  position: absolute;
  right: 0;

  border-radius: inherit;

  padding: 10px;
  font-weight: bold;
  font-size: 1rem;
`;

export const Colors = styled.div`
  width: 70%;
  margin: 20px auto 0;

  display: flex;

  justify-content: center;
  flex-wrap: wrap;
`;

export const Color = styled.button<ModalColorProps>`
  width: 40px;
  height: 40px;

  margin: 0 5px;
  margin-bottom: 10px;

  border: 1px solid #fff;

  ${(props) => css`
    background-color: ${props.colorCode};
  `}
`;

export const ColorCode = styled.div<ModalColorProps>`
  user-select: text;

  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: bold;

  span {
    padding: 1px 2px;
    margin-right: 8px;
    ${(props) => css`
      background-color: ${props.colorCode};
      color: ${props.colorCode === '#0000FF' ? '#fff' : '#000'};
    `}
  }
`;

export const Size = styled.div`
  margin-top: 15px;

  button {
    padding: 8px;
    border-radius: 4px;

    font-size: 0.8rem;
    color: #fff;
    background-color: #0275d8;

    & + button {
      margin-left: 10px;
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

export const ModalButton = styled.button`
  width: 90%;

  margin-top: 15px;
  color: #fff;
  font-weight: bold;
  background-color: #198754;
  padding: 6px 0;

  border-radius: 8px;

  &:active {
    transform: scale(0.98);
  }
`;
