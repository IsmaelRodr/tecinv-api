const categoria_equipamento = require("../models/categoria_equipamento.model")

exports.listar = async () => {
    return await categoria_equipamento.findAll();
}

exports.criar = async (nome_categoria) => {
    const novaCategoria = await categoria_equipamento.create({
        nome_categoria: nome_categoria
    });
    return {
        id_categoria_equipamento: novaCategoria.id,
        nome_categoria: novaCategoria.nome_categoria
    };
}

exports.buscarPorId = async (id) => {
    return await categoria_equipamento.findByPk(id);
}

exports.atualizarNome = async (id, dadosAtualizados) => {
    const Categoria = await categoria_equipamento.findByPk(id);
    if (Categoria) {
      await Categoria.update(dadosAtualizados);
      return Categoria;
    }
    return null;
}

exports.deletar = async (id) => {
    const Categoria = await categoria_equipamento.findByPk(id);
    if (Categoria) {
      await Categoria.destroy();
      return true;
    }
    return false;
}