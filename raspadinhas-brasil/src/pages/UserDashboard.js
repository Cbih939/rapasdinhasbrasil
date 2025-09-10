// src/pages/UserDashboard.js
import React from 'react';
import styled from 'styled-components';

// --- Dados de Exemplo para a Etapa 3 ---
// No futuro, isso virá do usuário logado e de uma chamada de API
const mockUserData = {
  name: 'Carlos Silva',
  email: 'carlos.silva@email.com',
};

const mockUserTickets = [
  {
    id: 101,
    raffleTitle: 'PIX de R$ 5.000',
    ticketNumber: 'A5B-1234',
    purchaseDate: '2025-09-08',
  },
  {
    id: 102,
    raffleTitle: 'PIX de R$ 5.000',
    ticketNumber: 'A5B-1235',
    purchaseDate: '2025-09-08',
  },
  {
    id: 103,
    raffleTitle: 'iPhone 16 Pro Max',
    ticketNumber: 'C7D-5678',
    purchaseDate: '2025-09-07',
  },
];

// --- Styled Components ---

const PageWrapper = styled.div`
  background-color: #f3f4f6;
  min-height: 100vh;
  padding: 2rem;
`;

const DashboardContainer = styled.main`
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1f2937;
  }
  p {
    font-size: 1.1rem;
    color: #6b7280;
  }
`;

const Section = styled.section`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-top: 0;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.75rem;
`;

const TicketList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TicketItem = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: #16a34a;
  }
`;

function UserDashboard() {
  return (
    <PageWrapper>
      <DashboardContainer>
        <Header>
          <h1>Minha Conta</h1>
          <p>Bem-vindo de volta, <strong>{mockUserData.name}!</strong></p>
        </Header>
        
        <Section>
          <SectionTitle>Minhas Raspadinhas</SectionTitle>
          <TicketList>
            {mockUserTickets.length > 0 ? (
              mockUserTickets.map(ticket => (
                <TicketItem key={ticket.id}>
                  <div>
                    <p style={{ margin: 0, fontWeight: '500' }}>{ticket.raffleTitle}</p>
                    <small>Comprado em: {new Date(ticket.purchaseDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</small>
                  </div>
                  <div>
                    Número: <strong>{ticket.ticketNumber}</strong>
                  </div>
                </TicketItem>
              ))
            ) : (
              <p>Você ainda não comprou nenhuma raspadinha.</p>
            )}
          </TicketList>
        </Section>
      </DashboardContainer>
    </PageWrapper>
  );
}

export default UserDashboard;