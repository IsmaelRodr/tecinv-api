const jwt = require('jsonwebtoken');
require('dotenv').config();

const autenticacao = (req, res, proximoPasso) => {
    const token = req.headers['authorization'];

    if (token) {
        jwt.verify(token, process.env.CHAVE_SECRETA, (erro, usuario) => {
            if (erro) {
                return res.status(401).json({ mensagem: "Token inválido" });
            } else {
                req.user = usuario;
                proximoPasso();
            }
        });
    } else {
        return res.status(401).json({ mensagem: "Token obrigatório não fornecido" });
    }
};

module.exports = autenticacao;