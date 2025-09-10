// src/components/common/Card.js
import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
`;

const Price = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #22c55e;
  margin: 0.5rem 0;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e5e7eb;
  border-radius: 999px;
  height: 10px;
  margin-top: auto; // Empurra a barra para o final
`;

const ProgressBarFill = styled.div`
  background-color: #22c55e;
  height: 100%;
  border-radius: 999px;
  width: ${props => props.percentage}%;
  transition: width 0.5s ease-in-out;
`;

const TicketsInfo = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.5rem;
`;

const BuyButton = styled.button`
  background-color: #16a34a;
  color: white;
  font-weight: bold;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #15803d;
  }
`;

function Card({ title, price, imageUrl, soldTickets, totalTickets }) {
  const percentageSold = (soldTickets / totalTickets) * 100;

  return (
    <CardWrapper>
      <Image src={imageUrl} alt={title} />
      <CardContent>
        <Title>{title}</Title>
        <Price>R$ {price.toFixed(2).replace('.', ',')}</Price>
        <ProgressBarContainer>
          <ProgressBarFill percentage={percentageSold} />
        </ProgressBarContainer>
        <TicketsInfo>{soldTickets} de {totalTickets} vendidos</TicketsInfo>
        <BuyButton>Comprar Agora</BuyButton>
      </CardContent>
    </CardWrapper>
  );
}

export default Card;