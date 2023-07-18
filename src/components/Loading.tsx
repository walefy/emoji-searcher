import { keyframes, styled } from 'styled-components';

export const Loading = () => (
  <LoadingContainer>
    <BouncingDot />
    <BouncingDot />
    <BouncingDot />
  </LoadingContainer>
);

const bounceAnimation = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const BouncingDot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #000;
  border-radius: 50%;
  margin: 0 6px;
  animation: ${bounceAnimation} 1.4s infinite ease-in-out both;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
