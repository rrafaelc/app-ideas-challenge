import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding: 8px;
  font-size: 1.3rem;
  background-color: #423f3e;

  border-radius: 8px;

  .name {
    color: #ffe3d8;
    font-weight: bold;
  }

  .timer {
    display: flex;
    align-items: center;
    gap: 20px;
    color: #ecdbba;

    div {
      font-family: Montserrat;
    }
  }

  .goal {
    color: #c84b31;
  }

  button {
    width: 90px;
    height: 30px;
    border-radius: 10px;

    background-color: #c70039;
    /* font-weight: bold; */
    color: #fff;

    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #c70039cc;
  }
`;
