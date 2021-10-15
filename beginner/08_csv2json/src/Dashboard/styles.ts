import styled from 'styled-components';
import { shade } from 'polished';

type ButtonsProps = {
  color?: string;
};

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  textarea {
    resize: none;
    width: 500px;
    height: 400px;

    padding: 8px 12px;
    border-radius: 6px;

    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
  }
`;

export const Main = styled.main`
  display: flex;
  gap: 20px;
  margin-bottom: 60px;

  .arrow {
    align-self: center;
  }
`;

export const MethodAndClearAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MethodAndClearButton = styled.button`
  height: 30px;
  border-radius: 12px;
  background-color: #3d2c8d;
  color: #fff;

  &:hover {
    background-color: ${shade(0.2, '#3D2C8D')};
  }

  &:active {
    transform: scale(0.95);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    &.method {
      width: 80px;
      justify-content: flex-start;

      svg {
        margin-left: 10px;
        margin-right: 8px;
      }
    }

    &.clear {
      width: 100px;
      gap: 4px;
    }
  }
`;

export const BoxArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .resultText {
    align-self: flex-start;
    height: 30px;
    display: flex;
    align-items: flex-end;
  }

  .buttons {
    button + button {
      margin-left: 30px;
    }
  }
`;

export const Button = styled.button<ButtonsProps>`
  padding: 8px 20px;
  border-radius: 20px;
  background-color: ${(props) => props.color ?? '#916bbf'};
  color: #fff;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.color ? shade(0.2, props.color) : shade(0.2, '#916bbf')};
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: grey;
  }

  &.copy {
    position: relative;

    &.active {
      .tooltiptext {
        visibility: visible;
      }
    }

    // https://www.w3schools.com/css/css_tooltip.asp
    .tooltiptext {
      visibility: hidden;
      width: 60px;
      background-color: #fff;
      color: #000;
      text-align: center;
      padding: 5px 0;
      border-radius: 6px;

      position: absolute;
      z-index: 1;

      top: 2px;
      left: 110%;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 100%;
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent #fff transparent transparent;
      }
    }
  }
`;
