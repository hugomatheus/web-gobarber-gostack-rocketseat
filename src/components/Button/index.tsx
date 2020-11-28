import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

// utilizado type e não interface pois como não passamos nenhum parametro e o que ele herda os necessários de ButtonHTMLAttributes HTMLButtonElement
// caso criar uma interface o próprio  eslint já troca de interface para type
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {loading ? 'carregando ...' : children}
    </Container>
  );
};

export default Button;
