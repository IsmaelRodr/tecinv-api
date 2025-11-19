const usuarioService = require("../services/usuario.services")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

exports.buscarUsuarios = async (req, res) => {
    const usuarios = await usuarioService.listar();
    res.status(200).json(usuarios);
}

exports.cadastrarUsuario = async (req, res) => {
  const hashSenha = await bcrypt.hash(req.body.senha, 10);
  const usuario = await usuarioService.cadastrar(req.body.nome, req.body.email, hashSenha);
  res.status(201).json({mensagem:'Usuário Cadastrado', usuario});
}


exports.login = async (req, res) => {
  try {
    const usuario = await usuarioService.buscarPorLogin(req.body.email);

    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    const validaSenha = await bcrypt.compare(req.body.senha, usuario.senha);
    if (!validaSenha) {
      return res.status(401).json({ mensagem: "Senha inválida" });
    }

    const token = jwt.sign({id_usuario: usuario.id_usuario,nome: usuario.nome}, process.env.CHAVE_SECRETA, {expiresIn: '1h'});

    res.status(200).json({ mensagem: `Olá, ${usuario.nome}`, token });

  } catch (erro) {
    console.error(erro);
    res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
};

exports.buscarUsuarioPorId = async (req, res) => {
    const usuario = await usuarioService.buscarPorId(req.params.id);
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }
}

exports.atualizarSenha = async (req, res) => {
  try {
    const { senha } = req.body;

    if (!senha) {
      return res.status(400).json({ mensagem: "A nova senha é obrigatória." });
    }

    const hash = await bcrypt.hash(senha, 10);

    const usuario = await usuarioService.atualizar(req.params.id, { senha: hash });

    if (!usuario) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.status(200).json({ mensagem: "Senha atualizada com sucesso" });

  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao atualizar a senha" });
  }
};

exports.deletarUsuario = async (req, res) => {
  try {
    const sucesso = await usuarioService.deletar(req.params.id);

    if (!sucesso) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    return res.status(200).json({ mensagem: 'Usuário deletado com sucesso' });

  } catch (error) {
    console.error("❌ Erro ao deletar usuário:", error);
    return res.status(500).json({ mensagem: 'Erro interno ao deletar usuário' });
  }
};