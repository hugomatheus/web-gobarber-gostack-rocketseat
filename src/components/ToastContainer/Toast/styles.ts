import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: number;
}

const toastTypes = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddedd;
    color: #e53030;
  `,
};

export const Container = styled(animated.div)<ToastProps>`
  display: flex;
  position: relative;
  width: 360px;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  & + div {
    margin-top: 8px;
  }

  /* Alternativas para aplicar cor no toast conforme o type passado pela props do toast */
  /* Alternativa 1: criar um objeto com as configurações de cada type e passar o type do prop   */

  ${props => toastTypes[props.type || 'info']}

  /* Alternativa 2: criar condições de prop para cada configuração   */
  /*

  ${props =>
    props.type === 'success' &&
    css`
      background: #e6fffa;
      color: #2e656a;
    `};

  ${props =>
    props.type === 'error' &&
    css`
      background: #fddedd;
      color: #e53030;
    `};

  */

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      line-height: 20px;
      opacity: 0.8;
    }
  }

  button {
    position: absolute;
    top: 19px;
    right: 16px;
    background: transparent;
    border: 0;
    opacity: 0.6;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
