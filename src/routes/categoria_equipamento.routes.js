const express = require('express');
const router = express.Router();
const categoriaController = require("../controllers/categoria_equipamento.controller");
const autenticacao = require('../config/autenticacao');

router.get('/', autenticacao, categoriaController.buscarCategorias);
router.get('/:id', autenticacao, categoriaController.buscarCategoriaPorId);
router.post('/', autenticacao, categoriaController.cadastrarCategoria);
router.put('/:id', autenticacao, categoriaController.atualizarCategoria);
router.delete('/:id', autenticacao, categoriaController.deletarCategoria);

module.exports = router;