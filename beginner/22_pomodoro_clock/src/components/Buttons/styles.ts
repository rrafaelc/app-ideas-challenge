import styled from "styled-components";
import { shade } from "polished";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const Btns = styled.div`
  display: flex;
  gap: 20px;

  button {
    width: 150px;
    height: 50px;
    background: #39415b;

    font-size: 24px;
    color: rgba(255, 255, 255, 0.8);

    border: none;
    border-radius: 15px;

    transition: background-color 0.2s;
  }

  button:hover {
    background: ${shade(0.2, "#39415b")};
  }

  button:active {
    transform: scale(0.98);
  }
`;

export const RoundBtn = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid #39415b;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.2s;

  svg {
    stroke: #39415b;
  }

  // https://stackoverflow.com/questions/17233804/how-to-prevent-sticky-hover-effects-for-buttons-on-touch-devices
  @media (hover: hover) {
    &:hover {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;
