import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  background: #121214;
  border: 2px solid #121214;
  color: #FFFFFF;
  padding: 0px 1em;
  border-radius: 5px;

  &:focus {
    outline: none !important;
    border-color: #8257E5;
  }
`;