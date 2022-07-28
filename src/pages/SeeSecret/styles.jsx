import styled from 'styled-components';

export const Container = styled.div`
  grid-row: 2;
  grid-column: 2 / 3;
  display: grid;
  grid-template-rows: 1fr;

  &>p {
    align-self: start;
    grid-row: 2;
    color: #FFFFFF;
    font-size: 1.5rem;
    align-self: start;
    padding: 20px 0;
    text-align: center;
  }
`;

export const BoxResult = styled.div`
  border-radius: 5px;
  background-color: #202024;
  padding: 36px 28px;
  color: #FFFFFF;

  &>p {
    background-color: #121214;
    padding: 15px;
    border-radius: 5px;
    font-size: 1.5rem;
  }

  a {
    display: block;
    text-decoration: none;
  }
`;
