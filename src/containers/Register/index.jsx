import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import api from '../../services/api';

import {
  SignUpLink,
  Form,
  H2,
  InputContainer,
  LeftContainer,
  LoginContainer,
  P,
  RightContainer,
  ErrorMessage,
} from './styles';

import { Button } from '../../components/Button';

// Schema de validação
const schema = yup
  .object({
    name: yup.string().required('O nome é obrigatório'),

    email: yup
      .string()
      .email('Email inválido')
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        'Digite um e-mail válido (ex: exemplo@email.com)',
      )
      .required('O email é obrigatório'),

    password: yup
      .string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('A senha é obrigatória'),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
      .required('A confirmação de senha é obrigatória'),
  })
  .required();

export function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit', // só valida no submit
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        toast.success('Usuário cadastrado com sucesso');
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else if (status === 400) {
        toast.error(
          'Email já cadastrado, se esqueceu a senha, clique em "Esqueci minha senha"',
        );
      } else {
        toast.error('Erro ao cadastrar usuário, tente novamente mais tarde');
      }
    } catch (error) {
      toast.error('Erro inesperado, tente novamente');
    }
  };

  return (
    <LoginContainer>
      <LeftContainer>
        <P></P>
      </LeftContainer>

      <RightContainer>
        <H2>Crie sua conta</H2>
        <br />
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Nome */}
          <InputContainer>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register('name')}
            />
            {errors?.name && (
              <ErrorMessage role="alert">{errors.name.message}</ErrorMessage>
            )}
          </InputContainer>

          {/* Email */}
          <InputContainer>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              {...register('email')}
            />
            {errors?.email && (
              <ErrorMessage role="alert">{errors.email.message}</ErrorMessage>
            )}
          </InputContainer>

          {/* Senha */}
          <InputContainer style={{ position: 'relative' }}>
            <label>Senha</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Mínimo 6 caracteres"
              {...register('password')}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '35px',
                cursor: 'pointer',
              }}
              aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors?.password && (
              <ErrorMessage role="alert">
                {errors.password.message}
              </ErrorMessage>
            )}
          </InputContainer>

          {/* Confirmar senha */}
          <InputContainer style={{ position: 'relative' }}>
            <label>Confirme sua senha</label>
            <input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Confirme sua senha"
              {...register('confirmPassword')}
            />
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '35px',
                cursor: 'pointer',
              }}
              aria-label={
                showConfirm ? 'Ocultar confirmação' : 'Mostrar confirmação'
              }
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors?.confirmPassword && (
              <ErrorMessage role="alert">
                {errors.confirmPassword.message}
              </ErrorMessage>
            )}
          </InputContainer>

          <Button type="submit">Cadastrar</Button>
        </Form>
        <span>Já possui uma conta?</span>
        <SignUpLink to="/login">Clique AQUI</SignUpLink>
      </RightContainer>
    </LoginContainer>
  );
}
