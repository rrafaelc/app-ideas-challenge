import styled from "styled-components";

export const ClockContainer = styled.div`
  margin-top: -40px;
  width: 220px;
  height: 220px;

  display: flex;
  justify-content: center;
  align-items: center;

  #countdown-number {
    color: rgba(255, 255, 255, 0.8);
    font-size: 40px;
  }

  svg {
    width: 220px;
    height: 220px;
    position: absolute;
  }

  svg circle {
    stroke-width: 2;
    fill: none;
  }

  .c1 {
    stroke: #1a1a1a;
  }

  .c2 {
    stroke: #8e2b24;

    stroke-dasharray: 120;
    stroke-dashoffset: 120;
    stroke-linecap: round;

    transform: rotate(-90deg);

    animation: anim 20s linear forwards;
  }

  @keyframes anim {
    100% {
      stroke-dashoffset: 0;
    }
  }
`;
