// src/pages/Home.js (arquivo completo atualizado)

import React from 'react';
import styled from 'styled-components';
import Card from '../components/common/Card'; // 1. Importe o componente Card

// --- Nossos Dados de Exemplo ---
const mockRaspadinhas = [
  // (cole o array de dados do Passo 2.1 aqui)
  {
    id: 1,
    title: 'iPhone 16 Pro Max',
    price: 15.00,
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699405',
    totalTickets: 1000,
    soldTickets: 350,
  },
  {
    id: 2,
    title: 'PIX de R$ 5.000',
    price: 10.00,
    imageUrl: 'https://logospng.org/download/pix/logo-pix-1024.png',
    totalTickets: 1000,
    soldTickets: 780,
  },
  {
    id: 3,
    title: 'Honda Biz 125 0km',
    price: 20.00,
    imageUrl: 'https://www.honda.com.br/motos/sites/hda/files/2022-08/biz-125_mob_1.png',
    totalTickets: 2000,
    soldTickets: 150,
  },
];

// --- Estilos para a página Home ---
const PageWrapper = styled.div`
  background-color: #f3f4f6;
  min-height: 100vh;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #1f2937;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;


function Home() {
  return (
    <PageWrapper>
      <Title>Prêmios Disponíveis</Title>
      <GridContainer>
        {mockRaspadinhas.map(raspadinha => (
          <Card
            key={raspadinha.id}
            title={raspadinha.title}
            price={raspadinha.price}
            imageUrl={raspadinha.imageUrl}
            soldTickets={raspadinha.soldTickets}
            totalTickets={raspadinha.totalTickets}
          />
        ))}
      </GridContainer>
    </PageWrapper>
  );
}

export default Home;