import styled, { css } from 'styled-components';

interface ContainerProps {
  interval: number;
}

export const Container = styled.div<ContainerProps>`
  height: 350px;
  background: #888;
  border-radius: 8px;

  ${(props) => css`
    transition: background-color ${props.interval}s;
  `}
`;
