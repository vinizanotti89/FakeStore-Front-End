import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

import {
  ForgotPasswordLink,
  SignUpLink,
  Form,
  H2,
  InputContainer,
  LeftContainer,
  LoginContainer,
  P,
  RightContainer,
} from './styles';

import { Button } from '../../components/Button';

export function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const schema = yup
    .object({
      email: yup
        .string()
        .email('Email inválido')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .required('A senha é obrigatória'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const [showError, setShowError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Monitora quando o usuário é logado para fazer o redirecionamento
  useEffect(() => {
    if (user && loginSuccess) {
      navigate('/');
      setLoginSuccess(false);
    }
  }, [user, loginSuccess, navigate]);

  const onSubmit = async (data) => {
    const result = await login(data.email, data.password); // chama login direto

    if (result.success) {
      toast.success('Bem vindo(a) a Loja dos Produtos que Deveriam Existir!');
      navigate('/'); // redireciona após login
    } else {
      toast.error(result.error || 'Usuário ou senha inválidos');
    }
  };

  useEffect(() => {
    if (errors?.password || errors?.email) {
      setShowError(true); // Exibe o erro
      const timer = setTimeout(() => {
        setShowError(false); // Esconde o erro após 1.5s
      }, 1500); // 1.5 segundos
      return () => clearTimeout(timer); // Limpa o timer quando o componente for desmontado
    }
  }, [errors?.password, errors?.email]);

  return (
    <LoginContainer>
      <LeftContainer>
        <P></P>
      </LeftContainer>

      <RightContainer>
        <H2>Seja bem-vindo à Loja dos Produtos que Deveriam Existir!</H2>
        <P>
          Aqui, tudo é Fake — mas o objetivo é real: Unir entretenimento com
          aprendizado.
        </P>{' '}
        <br />
        <br />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              {...register('email')}
            />
            {/* Popup de erro */}
            {showError && errors?.email && (
              <div>
                <p>{errors?.email?.message}</p>
              </div>
            )}
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register('password')}
            />
            {/* Popup de erro */}
            {showError && errors?.password && (
              <div>
                <p>{errors?.password?.message}</p>
              </div>
            )}
          </InputContainer>
          <Button type="submit">Entrar</Button> <br />
          <ForgotPasswordLink to="/reset-token/:token">
            Esqueci minha senha
          </ForgotPasswordLink>
        </Form>
        <span>Não possui uma conta?</span>
        <SignUpLink to="/cadastro">Clique AQUI</SignUpLink>
      </RightContainer>
    </LoginContainer>
  );
}
