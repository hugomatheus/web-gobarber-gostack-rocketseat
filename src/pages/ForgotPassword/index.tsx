import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import { Container, Content, AnimationContainer, Background } from './styles';
import logoImage from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

interface ForgotPasswordFormData {
  email: string;
}
const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        // limpar errors do form
        formRef.current?.setErrors({});

        // Validação com Yup
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        // setando validação e adicionando configuração abortEarly como false para que quando tiver algum erro não retorne imediatamente e assim mostrar todos os erros no lugar de um único erro
        await schema.validate(data, { abortEarly: false });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          // ? para verificar se é diferente de null já que a const formRef é iniciada com null
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na recuperação de senha',
          description:
            'Ocorreu um erro ao tentar realizar recuperação de senha , tente novamente',
        });
      }
    },
    [addToast],
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImage} alt="Logo" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperar senha</h1>
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />

            <Button type="submit">Recuperar</Button>
          </Form>
          <Link to="/">
            <FiLogIn />
            Voltar ao login
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;
