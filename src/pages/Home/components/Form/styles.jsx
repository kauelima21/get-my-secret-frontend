import styled from 'styled-components';

export const Container = styled.div`
  grid-row: 2;
  grid-column: 2 / 3 !important;
  align-self: start;
  border-radius: 5px;
  background-color: #202024;
  padding: 36px 28px;

  label {
    display: block;
    width: 100%;
    min-height: 16px;
    font-size: 14px;
    color: #87868B;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    height: 50px;
    font-size: 16px;
    background: #121214;
    border: 2px solid #121214;
    color: #FFFFFF;
    padding: 0px 1em;
    border-radius: 5px;
  }

  input:focus {
    outline: none !important;
    border-color: #8257E5;
  }
`;

export const ButtonSection = styled.div`
  width: 100%;
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormButton = styled.button`
  padding: 16px 32px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #FFFFFF;
  border: 2px solid ${props => props.bg};
  border-radius: 5px;
  cursor: pointer;
  background: ${props => props.bg};
  transition: background 0.2s ease 0s, box-shadow 0.2s ease 0s;

  &:hover {
    background-color: ${props => props.hover};
  }
`;
