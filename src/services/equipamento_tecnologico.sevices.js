const equipamento_tecnologico = require("../models/equipamento_tecnologico.model")

exports.listar = async () => {
    return await equipamento_tecnologico.findAll();
}

exports.criar = async (
    id_usuario,
    id_categoria,
    id_secretaria,
    fabricante,
    modelo,
    num_patrimonio,
    responsavel,
    setor,
    especificacoes,
    observacoes) => {
    const novoEquipamento = await equipamento_tecnologico.create({
        id_usuario: id_usuario,
        id_categoria: id_categoria,
        id_secretaria: id_secretaria,
        fabricante: fabricante,
        modelo: modelo,
        num_patrimonio: num_patrimonio,
        responsavel: responsavel,
        setor: setor,
        especificacoes: especificacoes,
        observacoes: observacoes
    });
    return {novoEquipamento};
}

exports.buscarPorId = async (id) => {
    return await equipamento_tecnologico.findByPk(id);
}

exports.atualizarNome = async (id, dadosAtualizados) => {
    const Equipamento = await equipamento_tecnologico.findByPk(id);
    if (Equipamento) {
      await Equipamento.update(dadosAtualizados);
      return Equipamento;
    }
    return null;
}

exports.deletar = async (id) => {
    const Equipamento = await equipamento_tecnologico.findByPk(id);
    if (Equipamento) {
      await Equipamento.destroy();
      return true;
    }
    return false;
}