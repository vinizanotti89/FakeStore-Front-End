import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  ResetContainer,
  LeftReset,
  RightReset,
  Title,
  StyledForm,
  InputGroup,
  Button,
  PopupContainer, 
  PopupContent,
} from './styles';

const ResetarSenha = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(null);

  const [showPopup, setShowPopup] = useState(true);

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

    useEffect(() => {
    let isMounted = true;

    const fetchEmail = async () => {
      try {
        const res = await fetch(`${baseUrl}/reset-token/${token}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || 'Erro ao validar token');

        if (isMounted) {
          setEmail(data.email);
        }
      } catch (err) {
        toast.error(err.message);
        navigate('/login');
      }
    };

    if (token) fetchEmail();

    return () => {
      isMounted = false;
    };
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!senha || !confirmar) {
      toast.warn('Preencha todos os campos');
      return;
    }

    if (senha !== confirmar) {
      toast.error('As senhas não coincidem');
      return;
    }

    if (senha.length < 6) {
      toast.warn('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword: senha }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Erro ao redefinir a senha');

      toast.success('Senha redefinida com sucesso!');
      navigate('/login');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Fecha o popup quando o usuário clicar no botão
  };

  return (
    <ResetContainer>
      <LeftReset />
      <RightReset>
        <Title>Redefinir Senha</Title>
        <StyledForm onSubmit={handleSubmit}>
          <InputGroup>
            <label>Email (protegido)</label>
            <input
              type="email"
              value={email || ''}
              disabled
              style={{ backgroundColor: '#eee' }}
            />
          </InputGroup>
          <InputGroup>
            <label>Nova Senha</label>
            <input
              type="password"
              placeholder="Digite a nova senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <label>Confirme a Senha</label>
            <input
              type="password"
              placeholder="Confirme a nova senha"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
            />
          </InputGroup>

          <Button type="submit" disabled={loading}>
            {loading ? 'Redefinindo...' : 'Redefinir Senha'}
          </Button>
        </StyledForm>
      </RightReset>

      {/* Exibe o popup apenas se showPopup for true */}
      {showPopup && (
        <PopupContainer>
          <PopupContent>
            <p>
              Em um app real você receberia esse link por email. Mas aqui vai direto.
              Porque somos devs e sabemos o que importa. 😎
            </p>
            <button onClick={handleClosePopup}>Fechar</button>
          </PopupContent>
        </PopupContainer>
      )}
    </ResetContainer>
  );
};

export default ResetarSenha;