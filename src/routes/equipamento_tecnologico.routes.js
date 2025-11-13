const express = require('express');
const router = express.Router();
const equipamentoController = require("../controllers/equipamento_tecnologico.controller");
const autenticacao = require('../config/autenticacao');

router.get('/', autenticacao, equipamentoController.buscarEquipamentos);
router.get('/:id', autenticacao, equipamentoController.buscarEquipamentoPorId);
router.post('/', autenticacao, equipamentoController.cadastrarEquipamento);
router.put('/:id', autenticacao, equipamentoController.atualizarEquipamento);
router.delete('/:id', autenticacao, equipamentoController.deletarEquipamento);

module.exports = router;