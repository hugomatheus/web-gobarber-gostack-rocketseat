import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, Background } from './styles';
import logoImage from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: SubmitHandler<FormData>) => {
    try {
      // limpar errors do form
      formRef.current?.setErrors({});

      // Validação com Yup
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
      });
      // setando validação e adicionando configuração abortEarly como false para que quando tiver algum erro não retorne imediatamente e assim mostrar todos os erros no lugar de um único erro
      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const errors = getValidationErrors(error);
      // ? para verificar se é diferente de null já que a const formRef é iniciada com null
      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImage} alt="Logo" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="/">
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
