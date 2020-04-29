import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logImg from '../../assets/logo.png';

import { Container, Title } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Image source={logImg} />

      <Title>Faça seu logon</Title>

      <Input name="name" icon="user" placeholder="Nome" />
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('Entrar');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignUp;
