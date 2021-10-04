import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
`;

export const Options = styled.div`
  margin: 20px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .start {
    width: 100px;
    height: 30px;

    border-radius: 8px;
    font-size: 1.2rem;
  }

  .interval {
    /* https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp */
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type='number'] {
      -moz-appearance: textfield;
    }

    display: flex;

    label {
      font-size: 1.2rem;
      margin-right: 5px;
    }

    input {
      width: 50px;
      border-radius: 4px;
      font-size: 1rem;
      padding: 2px 5px;
    }
  }
`;

export const ColorsCode = styled.div`
  align-self: flex-start;

  display: flex;
  justify-content: center;
  gap: 30px;

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    margin-bottom: 5px;
  }
`;
