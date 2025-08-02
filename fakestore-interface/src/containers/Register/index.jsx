import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

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
} from './styles';

import { Button } from '../../components/Button';

export function Register() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      name: yup.string().required('O nome é obrigatório'),
      email: yup
        .string()
        .email('Email inválido')
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const [showError, setShowError] = useState(false);
  const onSubmit = async (data) => {
    try {
    const { status } = await api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        validateStatus: () => true,
      });

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        toast.success('Usuário cadastrado com sucesso');
        setTimeout(() => {
          window.location.href = '/login'; 
        }, 1000);
      } else if (status === 400) {
        toast.error('Email já cadastrado, se esqueceu a senha, clique em "Esqueci minha senha"');
      } else {
        toast.error('Erro ao cadastrar usuário, tente novamente mais tarde');
      }

  } catch (error) {
     throw new Error();
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
        <H2>Crie sua conta</H2>
        
        <br />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite seu Nome"
              {...register('name')}
            />
            {/* Popup de erro */}
            {showError && errors?.name && (
              <div>
                <p>{errors?.name?.message}</p>
              </div>
            )}
          </InputContainer>
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
          <InputContainer>
            <label>Confirme sua senha</label>
            <input
              type="password"
              placeholder="Digite a mesma senha"
              {...register('confirmPassword')}
            />
            {/* Popup de erro */}
            {showError && errors?.password && (
              <div>
                <p>{errors?.password?.message}</p>
              </div>
            )}
          </InputContainer>
          <Button type="submit">Cadastrar</Button> <br />
          
        </Form>
        <span>Já possui uma conta?</span>
        <SignUpLink to="/login">Clique AQUI</SignUpLink>
      </RightContainer>
    </LoginContainer>
  );
}
