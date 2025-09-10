// server/index.js
const express = require('express');
const app = express();
const PORT = 3001; // Usamos uma porta diferente do React (que usa 3000)

// Rota de teste
app.get('/', (req, res) => {
  res.send('Olá do servidor RaspadinhasBrasil!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});