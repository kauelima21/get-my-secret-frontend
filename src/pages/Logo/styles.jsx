import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled(NavLink)`
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