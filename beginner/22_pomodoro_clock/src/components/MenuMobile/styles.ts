import styled from "styled-components";

export const MenuContainer = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.8);
`;

export const Modal = styled.div`
  width: 320px;
  margin: 60px auto 0;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #39415b;

  p {
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 24px;
  }

  #options {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
      width: 280px;
      height: 55px;
      padding: 0 20px;

      border: none;
      border-radius: 30px;

      background: rgba(26, 26, 26, 0.5);
      color: rgba(255, 255, 255, 0.6);

      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }

  #btns {
    margin: 36px 0 20px 0;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    #icon {
      padding: 0 20px;
      background: none;
      border: none;

      transition: transform 0.2s;

      &:active {
        transform: scale(0.9);
      }

      svg {
        color: rgba(255, 255, 255, 0.8);
      }
    }

    #ok {
      padding: 10px 50px;
      font-size: 20px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.8);

      background: none;
      border: 1px solid rgba(255, 255, 255, 0.8);
      border-radius: 30px;

      transition: transform 0.2s;

      &:active {
        transform: scale(0.98);
      }
    }
  }
`;
