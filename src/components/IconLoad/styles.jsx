import styled, { css, keyframes } from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const Container = styled(AiOutlineLoading3Quarters)`
  ${props => css`
    animation: ${load} .7s linear infinite;
  `}
`;

const load = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;