const express = require('express');
const app = express();
const routes = require('./routes');

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/api', routes);

// Porta padrão
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;