const express = require('express');
const router = express.Router();
const usuarioController = require("../controllers/usuario.controller");
const autenticacao = require('../config/autenticacao');

router.get('/', autenticacao, usuarioController.buscarUsuarios);
router.get('/:id', autenticacao, usuarioController.buscarUsuarioPorId);
router.post('/', usuarioController.cadastrarUsuario);
router.post('/login', usuarioController.login);
router.put('/:id', autenticacao, usuarioController.atualizarUsuario);
router.delete('/:id', autenticacao, usuarioController.deletarUsuario);


module.exports = router;