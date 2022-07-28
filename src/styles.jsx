import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #121214;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
`;

export const InfoText = styled.h4`
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
  grid-row: 3;
  grid-column: 2;
  justify-self: center;

  &>a {
    text-decoration: none;
  }
`;
