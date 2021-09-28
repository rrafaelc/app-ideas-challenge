import styled, { css } from 'styled-components';

interface ButtonProp {
  active: boolean;
}

export const Button = styled.button<ButtonProp>`
  width: 100px;
  border-radius: 15px;
  padding: 12px;

  font-weight: bold;
  font-size: 1.2rem;
  color: #fff;

  ${(props) => css`
    background-color: ${props.active ? 'green' : 'tomato'};
  `}
`;
