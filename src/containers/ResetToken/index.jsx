import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  ResetContainer,
  LeftReset,
  RightReset,
  Title,
  StyledForm,
  InputGroup,
  Button,
  InfoMessage,
} from './styles';

const ResetToken = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetLink, setResetLink] = useState(null);
  const navigate = useNavigate();

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Erro ao validar e-mail');

      setResetLink(data.resetLink);
      toast.success(data.message);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ResetContainer>
      <LeftReset />
      <RightReset>
        <Title>Esqueci minha senha</Title>
        {resetLink ? (
          <InfoMessage>
            <p>Link gerado com sucesso!</p>
            <a href={resetLink} target="_blank" rel="noopener noreferrer">
              Clique aqui se não for redirecionado automaticamente
            </a>

            <Button onClick={() => (window.location.href = resetLink)}>
              Redefinir Senha
            </Button>
          </InfoMessage>
        ) : (
          <StyledForm onSubmit={handleSubmit}>
            <InputGroup>
              <label>Email</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
            <Button type="submit" disabled={loading}>
              {loading ? 'Verificando...' : 'Enviar link'}
            </Button>
          </StyledForm>
        )}
        <Button onClick={() => navigate('/login')} style={{ marginTop: 20 }}>
          Voltar para o login
        </Button>
      </RightReset>
    </ResetContainer>
  );
};

export default ResetToken;
