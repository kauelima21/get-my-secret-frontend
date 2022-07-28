import styled from 'styled-components';

export const Container = styled.div`
  grid-row: 2;
  grid-column: 2 / 3;
  align-self: start;
  display: grid;
  grid-template-rows: 1fr 1fr;

  &>p {
    align-self: start;
    grid-row: 2;
    color: #FFFFFF;
    font-size: 1.5rem;
    align-self: start;
    padding: 20px 0;
    text-align: center;
  }

  span {
    color: #8257E5
  }
`;
