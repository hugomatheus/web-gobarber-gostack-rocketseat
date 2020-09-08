import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import SignUpBackgroundImage from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(150px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${appearFromRight} 1.3s;
  form {
    width: 340px;
    display: flex;
    flex-direction: column;
    margin: 80px 0;
    text-align: center;

    h1 {
      margin-bottom: 41px;
      font-size: 24px;
      line-height: 32px;
      color: #f4ede8;
    }
  }

  a {
    display: flex;
    align-items: center;
    line-height: 21px;
    color: #f4ede8;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${SignUpBackgroundImage}) no-repeat center;
  background-size: cover;
`;
