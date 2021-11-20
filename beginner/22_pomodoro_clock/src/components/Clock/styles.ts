import styled, { css } from "styled-components";

type Props = {
  seconds: number;
  isStarted: boolean;
  isSkipped: boolean;
  isFinished: boolean;
};

export const ClockContainer = styled.div<Props>`
  margin-top: -40px;
  width: 220px;
  height: 220px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1000px) {
    width: 300px;
    height: 300px;
  }

  #countdown-number {
    color: rgba(255, 255, 255, 0.8);
    font-size: 40px;

    @media (min-width: 1000px) {
      font-size: 52px;
    }
  }

  svg {
    width: 220px;
    height: 220px;
    position: absolute;

    @media (min-width: 1000px) {
      width: 300px;
      height: 300px;
    }
  }

  svg circle {
    stroke-width: 2;
    fill: none;
  }

  .c1 {
    stroke: ${({ isFinished }) => (!isFinished ? "#1a1a1a" : "#216323")};
  }

  .c2 {
    stroke: #8e2b24;

    stroke-dasharray: 114;
    stroke-dashoffset: 114;
    stroke-linecap: round;

    transform: rotate(-90deg);

    ${({ isFinished, isSkipped, seconds }) =>
      !isFinished &&
      !isSkipped &&
      css`
        animation: anim ${seconds}s linear forwards;
      `}
    animation-play-state: ${(props) =>
      props.isStarted ? "running" : "paused"};
  }

  @keyframes anim {
    100% {
      stroke-dashoffset: 0;
    }
  }
`;
