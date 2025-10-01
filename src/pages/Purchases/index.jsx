import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container, Title, PurchaseCard } from './styles';

export default function Purchases() {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPurchases() {
      try {
        const response = await api.get('/purchases');
        setPurchases(response.data);
      } catch (error) {
        console.error('Erro ao carregar compras:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPurchases();
  }, []);

  if (loading) {
    return (
      <Container>
        <Title>Carregando suas compras...</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Title>📦 Minhas Compras</Title>

      {purchases.length === 0 ? (
        <p>Você ainda não realizou nenhuma compra.</p>
      ) : (
        purchases.map((purchase) => (
          <PurchaseCard key={purchase.id}>
            <h3>{purchase.product}</h3>
            <p>Preço: R$ {Number(purchase.price).toFixed(2)}</p>
            <p>Data: {new Date(purchase.date).toLocaleDateString('pt-BR')}</p>
            <p>Status: {purchase.status}</p>
          </PurchaseCard>
        ))
      )}
    </Container>
  );
}
