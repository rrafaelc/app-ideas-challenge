import styled from "styled-components";

export const NewValueContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    padding: 20px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #39415b;

    label {
      margin-bottom: 10px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 20px;
    }

    input {
      /* Chrome, Safari, Edge, Opera */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      &[type="number"] {
        -moz-appearance: textfield;
      }

      text-align: right;
      width: 50px;
      font-size: 20px;
      padding: 0 4px;
      color: rgba(255, 255, 255, 0.8);

      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.8);
      outline: none;
      background-color: transparent;

      margin-bottom: 10px;
    }

    div {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;

      button {
        width: 90px;
        height: 30px;
        border-radius: 10px;
        background-color: transparent;
        color: #fff;
        font-size: 16px;
        border: 1px solid #fff;
        outline: none;
      }
    }
  }
`;
