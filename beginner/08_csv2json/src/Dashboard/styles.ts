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
  margin-bottom: 60px;

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

  .arrow {
    align-self: center;
  }

  .inputTextArea {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .buttons {
      button + button {
        margin-left: 50px;
      }

      .copy {
        position: relative;
        width: 80px;
        height: 30px;
        border-radius: 12px;
        background-color: #916bbf;
        color: #fff;
        transition: background-color 0.2s;

        &:hover {
          background-color: #916bbfcc;
        }

        &.active {
          .tooltiptext {
            visibility: visible;
          }
        }

        // https://www.w3schools.com/css/css_tooltip.asp
        .tooltiptext {
          visibility: hidden;
          width: 60px;
          background-color: #fff;
          color: #000;
          text-align: center;
          padding: 5px 0;
          border-radius: 6px;

          position: absolute;
          z-index: 1;

          top: 2px;
          left: 110%;

          &::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 100%;
            margin-top: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent #fff transparent transparent;
          }
        }
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