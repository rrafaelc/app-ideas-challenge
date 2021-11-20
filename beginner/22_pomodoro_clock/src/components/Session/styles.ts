import styled, { css, keyframes } from "styled-components";

type Props = {
  sessionCount: number;
};

export const SessionContainer = styled.div<Props>`
  margin-top: 10px;

  p {
    text-align: center;
    font-size: 18px;
  }

  svg {
    margin: 20px 0;

    ${({ sessionCount }) =>
      sessionCount === 8 &&
      css`
        &:first-of-type path {
          stroke: #216323 !important;
        }
        &:first-of-type circle {
          fill: #216323 !important;
        }
      `}
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

const pathDashOffset = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

export const Circle1 = styled.circle<Props>`
  ${({ sessionCount }) =>
    sessionCount === 1 &&
    css`
      animation: ${activeCircle} 1s linear forwards;
    `}

  ${({ sessionCount }) =>
    sessionCount >= 2 &&
    /*
     * When the sessionCount changes, the animation is removed.
     * The next animation needs the previous size to run smoothly.
     * So I hard code a size for circle.
     */
    css`
      r: 12.5;
      stroke: #8e2b24;
      stroke-width: 5;
      animation: ${completeCircle} 0.5s linear forwards;
    `}
`;

export const Path1 = styled.path<Props>`
  stroke-dasharray: 32;
  stroke-dashoffset: 32;

  ${({ sessionCount }) =>
    sessionCount >= 2 &&
    css`
      animation: ${pathDashOffset} 1s linear forwards;
    `}
`;

export const Circle2 = styled.circle<Props>`
  ${({ sessionCount }) =>
    sessionCount === 3 &&
    css`
      animation: ${activeCircle} 1s linear forwards;
    `}

  ${({ sessionCount }) =>
    sessionCount >= 4 &&
    css`
      r: 12.5;
      stroke: #8e2b24;
      stroke-width: 5;
      animation: ${completeCircle} 0.5s linear forwards;
    `}
`;

export const Path2 = styled.path<Props>`
  stroke-dasharray: 32;
  stroke-dashoffset: 32;

  ${({ sessionCount }) =>
    sessionCount >= 4 &&
    css`
      animation: ${pathDashOffset} 1s linear forwards;
    `}
`;

export const Circle3 = styled.circle<Props>`
  ${({ sessionCount }) =>
    sessionCount === 5 &&
    css`
      animation: ${activeCircle} 1s linear forwards;
    `}

  ${({ sessionCount }) =>
    sessionCount >= 6 &&
    css`
      r: 12.5;
      stroke: #8e2b24;
      stroke-width: 5;
      animation: ${completeCircle} 0.5s linear forwards;
    `}
`;

export const Path3 = styled.path<Props>`
  stroke-dasharray: 32;
  stroke-dashoffset: 32;

  ${({ sessionCount }) =>
    sessionCount >= 6 &&
    css`
      animation: ${pathDashOffset} 1s linear forwards;
    `}
`;

export const Circle4 = styled.circle<Props>`
  ${({ sessionCount }) =>
    sessionCount === 7 &&
    css`
      animation: ${activeCircle} 1s linear forwards;
    `}

  ${({ sessionCount }) =>
    sessionCount >= 8 &&
    css`
      r: 12.5;
      stroke: #8e2b24;
      stroke-width: 5;
      animation: ${completeCircle} 0.5s linear forwards;
    `}
`;
