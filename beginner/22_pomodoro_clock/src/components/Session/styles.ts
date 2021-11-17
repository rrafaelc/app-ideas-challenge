import styled, { keyframes } from "styled-components";

export const SessionContainer = styled.div`
  margin-top: 10px;

  p {
    text-align: center;
    font-size: 18px;
  }

  svg {
    margin: 20px 0;
  }
`;

const activeCircle = keyframes`
  100% {
    r: 12.5;
    stroke: #8E2B24;
    stroke-width: 5;
  }
`;

const completeCircle = keyframes`
  100% {
    r: 10;
    stroke: transparent;
    fill: #8E2B24;
    }
`;

const dashOffset = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

export const Path1 = styled.path`
  stroke-dasharray: 32;
  stroke-dashoffset: 32;

  animation: ${dashOffset} 1s 0.5s linear forwards;
`;

export const Path2 = styled.path`
  stroke-dasharray: 32;
  stroke-dashoffset: 32;

  /* animation: ${dashOffset} 1s linear forwards; */
`;

export const Path3 = styled.path`
  stroke-dasharray: 32;
  stroke-dashoffset: 32;

  /* animation: ${dashOffset} 1s linear forwards; */
`;

export const Circle1 = styled.circle`
  animation: ${completeCircle} 0.5s linear forwards;
`;

export const Circle2 = styled.circle`
  animation: ${activeCircle} 0.5s 1.5s linear forwards;
`;

export const Circle3 = styled.circle``;

export const Circle4 = styled.circle``;
