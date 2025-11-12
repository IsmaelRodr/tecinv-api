const secretaria = require("../models/secretaria.model")

exports.listar = async () => {
    return await secretaria.findAll();
}

exports.criar = async (usuario_id, nome_secretaria) => {
    const novaSecretaria = await secretaria.create({
        usuario_id: usuario_id,
        nome_secretaria: nome_secretaria
    });
    return {
        id_secretaria: novaSecretaria.id,
        nome_secretaria: novaSecretaria.nome_secretaria
    };
}

exports.buscarPorId = async (id) => {
    return await secretaria.findByPk(id);
}

exports.atualizarNome = async (id, dadosAtualizados) => {
    const Secretaria = await secretaria.findByPk(id);
    if (Secretaria) {
      await Secretaria.update(dadosAtualizados);
      return Secretaria;
    }
    return null;
}

exports.deletar = async (id) => {
    const Secretaria = await secretaria.findByPk(id);
    if (Secretaria) {
      await Secretaria.destroy();
      return true;
    }
    return false;
}