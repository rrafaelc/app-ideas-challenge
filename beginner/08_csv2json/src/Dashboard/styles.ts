import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  background-color: #2f2f2f;

  h1 {
    flex: 1;
  }

  textarea {
    resize: none;
    width: 500px;
    height: 400px;

    padding: 8px 12px;

    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
  }
`;

export const Main = styled.main`
  display: flex;
  gap: 20px;

  .methodAndClear {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .method {
      width: 80px;
      height: 30px;
      border-radius: 12px;
      background-color: #916bbf;
      color: #fff;

      display: flex;
      align-items: center;

      .icon {
        margin-left: 10px;
        margin-right: 8px;
      }

      transition: background-color 0.2s;

      &:hover {
        background-color: #916bbfcc;
      }

      &:active {
        transform: scale(0.95);
      }
    }

    .clearAll {
      display: flex;
      align-items: center;
    }
  }

  .switch {
    align-self: center;

    button {
      background-color: transparent;
    }
  }

  .inputTextArea {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .buttons {
      button + button {
        margin-left: 50px;
      }
    }
  }

  .result {
    span {
      height: 30px;
      display: flex;
      align-items: flex-end;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  margin-top: 60px;

  display: flex;
  justify-content: center;
`;
