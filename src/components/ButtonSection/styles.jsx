import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  &>div {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  @media (max-width: 805px) {
    justify-content: center;
  }
`;
