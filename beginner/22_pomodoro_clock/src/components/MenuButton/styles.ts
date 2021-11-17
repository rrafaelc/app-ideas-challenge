import styled from "styled-components";

export const MenuButtonContainer = styled.div`
  margin-top: 20px;
  width: 90%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 24px;

    transition: transform 0.2s;
  }

  svg {
    transition: transform 0.5s;
  }

  @media (hover: hover) {
    button:hover {
      transform: scale(1.1);

      svg {
        transform: rotate(90deg);
      }
    }
  }

  button:active {
    transform: scale(0.95);
  }
`;
