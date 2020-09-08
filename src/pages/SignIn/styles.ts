import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import SignInBackgroundImage from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-150px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1.3s;
  form {
    width: 340px;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    text-align: center;

    h1 {
      margin-bottom: 41px;
      font-size: 24px;
      line-height: 32px;
      color: #f4ede8;
    }

    a {
      display: block;
      margin-top: 24px;
      line-height: 21px;
      text-align: center;
      color: #f4ede8;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    margin-top: 80px;
    line-height: 21px;
    color: #ff9000;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackgroundImage}) no-repeat center;
  background-size: cover;
`;
