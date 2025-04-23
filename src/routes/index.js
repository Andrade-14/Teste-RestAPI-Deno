const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');

// Rota de saúde (health check)
router.get('/health', healthController.checkHealth);

module.exports = router;