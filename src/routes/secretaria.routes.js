const express = require('express');
const router = express.Router();
const secretariaController = require("../controllers/secretaria.controller");
const autenticacao = require('../config/autenticacao');

router.get('/', autenticacao, secretariaController.buscarSecretarias);
router.get('/:id', autenticacao, secretariaController.buscarSecretariaPorId);
router.post('/', autenticacao, secretariaController.cadastrarSecretaria);
router.put('/:id', autenticacao, secretariaController.atualizarSecretaria);
router.delete('/:id', autenticacao, secretariaController.deletarSecretaria);

module.exports = router;