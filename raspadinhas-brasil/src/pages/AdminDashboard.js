// src/pages/AdminDashboard.js
import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const PageWrapper = styled.div`
  background-color: #f3f4f6;
  min-height: 100vh;
  padding: 2rem;
`;

const DashboardContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1f2937;
  }
`;

const Button = styled.button`
  background-color: #22c55e;
  color: white;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 1rem;

  &:hover {
    background-color: #16a34a;
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
`;

// Placeholder para a futura tabela de raspadinhas
const PlaceholderTable = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 4rem;
  text-align: center;
  color: #9ca3af;
  font-style: italic;
`;


function AdminDashboard() {
  return (
    <PageWrapper>
      <DashboardContainer>
        <Header>
          <h1>Painel do Administrador</h1>
        </Header>
        
        <Section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <SectionTitle style={{ margin: 0 }}>Gerenciar Raspadinhas</SectionTitle>
            <Button>+ Nova Raspadinha</Button>
          </div>
          
          <PlaceholderTable>
            A tabela com as raspadinhas ativas e a lógica de criação aparecerá aqui.
          </PlaceholderTable>

        </Section>
      </DashboardContainer>
    </PageWrapper>
  );
}

export default AdminDashboard;