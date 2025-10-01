import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../../contexts/CartContext';
import { BackgroundContainer } from '../../components/BackgroundContainer/index.jsx';
import { Container, CardField, Label, Input, Button, Total } from './styles';
import { useAuth } from '../../contexts/AuthContext';

export default function Checkout() {
  const { items, totalAmount, clearCart } = useCart();
  const { user } = useAuth(); // ✅ Hook deve ser chamado aqui no topo
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);

  const [cardData, setCardData] = useState({
    number: '4242 4242 4242 4242',
    exp: '12/34',
    cvc: '123',
  });

  // Criar PaymentIntent no backend
  useEffect(() => {
    const createPaymentIntent = async () => {
      if (items.length === 0) return setLoading(false);
      const baseUrl =
        import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

      try {
        const { data } = await axios.post(`${baseUrl}/create-payment-intent`, {
          products: items,
        });
        setClientSecret(data.clientSecret);
      } catch {
        // ignora erros
      } finally {
        setLoading(false);
      }
    };
    createPaymentIntent();
  }, [items]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // Simula processamento de pagamento
    await new Promise((res) => setTimeout(res, 1000));

    // Prepare os dados da compra
    const purchaseData = {
      userId: user?._id || null, // ✅ garante que não quebre se não tiver user
      products: items.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount,
    };

    // Enviar dados para o backend para salvar a compra
    try {
      const baseUrl =
        import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
      await axios.post(`${baseUrl}/save-purchase`, purchaseData);
    } catch (error) {
      console.error('Erro ao salvar a compra:', error);
    } finally {
      clearCart();
      setProcessing(false);
      setSuccess(true);

      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  if (loading) {
    return (
      <BackgroundContainer>
        <h1>Carregando informações de pagamento...</h1>
      </BackgroundContainer>
    );
  }

  if (items.length === 0 && !success) {
    return (
      <BackgroundContainer>
        <h1>Seu carrinho está vazio!</h1>
      </BackgroundContainer>
    );
  }

  if (success) {
    return (
      <BackgroundContainer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <h1>🎉 Obrigado pela sua compra!</h1>
          <p>Seu pedido foi confirmado com sucesso 🚀</p>
        </div>
      </BackgroundContainer>
    );
  }

  return (
    <BackgroundContainer>
      <Container>
        <h1>Finalizar Pagamento</h1>
        <Total>Total da compra: R$ {totalAmount.toFixed(2)}</Total>

        <form onSubmit={handleSubmit}>
          <CardField>
            <Label>
              Número do cartão (Os dados presentes aqui são fictícios e
              funcionam para simular uma compra)
            </Label>
            <Input
              name="number"
              value={cardData.number}
              onChange={handleChange}
              placeholder="Número do cartão"
            />
          </CardField>

          <CardField>
            <Label>Validade (MM/AA)</Label>
            <Input
              name="exp"
              value={cardData.exp}
              onChange={handleChange}
              placeholder="MM/AA"
            />
          </CardField>

          <CardField>
            <Label>CVC</Label>
            <Input
              name="cvc"
              value={cardData.cvc}
              onChange={handleChange}
              placeholder="CVC"
            />
          </CardField>

          <Button type="submit" disabled={processing}>
            {processing ? 'Processando...' : 'Finalizar Compra'}
          </Button>
        </form>
      </Container>
    </BackgroundContainer>
  );
}
