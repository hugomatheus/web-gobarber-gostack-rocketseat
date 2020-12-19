import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  header {
    height: 144px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      height: 144px;
      max-width: 1120px;
      margin: 0 auto;

      display: flex;
      align-items: center;

      a {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #312e38;

        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;

        &:hover {
          background: #28262e;
        }

        svg {
          color: #999591;
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: -176px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 340px;
    display: flex;
    flex-direction: column;
    margin: 80px 0;
    text-align: center;

    h1 {
      margin-bottom: 41px;
      font-size: 20px;
      text-align: left;
    }

    input[name='old_password'] {
      margin-top: 24px;
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
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  button {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border: 0;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
