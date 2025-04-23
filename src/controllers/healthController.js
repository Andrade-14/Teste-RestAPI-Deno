// Função para checar o status da API
exports.checkHealth = (req, res) => {
  res.status(200).json({
    message: 'API está funcionando corretamente!',
    timestamp: new Date(),
  });
};