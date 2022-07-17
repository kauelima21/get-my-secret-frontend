import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #121214;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 2fr;

  &>p {
    color: #FFFFFF;
    font-size: 1.5rem;
    grid-row: 3;
    align-self: start;
    grid-column: 2 / 3;
    padding: 20px 0;
  }

  span {
    color: #8257E5
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  grid-column: 2 / 3;
  justify-self: center;

  h1 {
    font-size: 3rem;
    color: #FFFFFF;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;
