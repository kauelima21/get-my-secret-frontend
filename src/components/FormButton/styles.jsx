import styled from "styled-components";

export const Container = styled.button`
  padding: 16px 32px;
  font-size: ${props => `${props.size}px` ?? '12px'};
  font-weight: bold;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #FFFFFF;
  border: 2px solid ${props => props.bg};
  border-radius: 5px;
  cursor: pointer;
  background: ${props => props.bg};
  transition: background 0.2s ease 0s, box-shadow 0.2s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    background-color: ${props => props.hover};
  }
`;
