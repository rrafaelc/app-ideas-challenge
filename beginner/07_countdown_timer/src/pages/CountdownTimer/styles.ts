import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .messageError {
    width: 200px;
    text-align: center;
    color: #c70039;
  }

  .timers {
    text-align: center;
    margin: 30px 0 50px;
    display: flex;

    flex-wrap: wrap;
    gap: 30px;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
`;

export const Create = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  border: 1px solid transparent;
  border-radius: 8px;
  padding: 8px;

  input {
    padding: 8px;
    font-size: 1.1rem;
    border-radius: 8px;
  }

  #datetime {
    border: 3px solid transparent;
  }

  #datetime.error {
    border-color: #c70039;
  }

  button {
    height: 40px;
    font-size: 1.1rem;
    background-color: #28a745;
    color: #fff;

    border-radius: 8px;
    //https://stackoverflow.com/questions/45049873/how-to-remove-the-blue-highlight-of-button-on-mobile
    -webkit-tap-highlight-color: transparent;
  }

  button:active {
    transform: scale(0.98);
  }

  &.errorAnimation {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;
