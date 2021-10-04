import styled, { css } from 'styled-components';

interface InputProps {
  outlineColor: string;
}

export const Input = styled.input<InputProps>`
  width: 100px;
  height: 30px;

  padding: 0 8px;
  font-size: 1rem;

  border-radius: 8px;

  ${(props) => css`
    outline: 3px solid ${props.outlineColor};
  `}
`;
