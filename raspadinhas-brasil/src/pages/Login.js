// src/pages/Login.js
import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginBox = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #1f2937;
  margin-bottom: 1.5rem;
  
  span {
    color: #22c55e;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #22c55e;
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);
  }
`;
const Button = styled.button`
  background-color: #22c55e;
  color: #ffffff;
  font-weight: bold;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #16a34a;
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Funcionalidade de login a ser implementada!');
  };

  return (
    <PageContainer>
      <LoginBox>
        <Title>
          Raspadinhas<span>Brasil</span>
        </Title>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="password">Senha</label>
          <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Button type="submit">Entrar</Button>
        </StyledForm>
      </LoginBox>
    </PageContainer>
  );
}

export default Login;