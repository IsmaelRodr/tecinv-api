const equipamentoTecnologicoService = require("../services/equipamento_tecnologico.sevices")

exports.buscarEquipamentos = async (req, res) => {
    const equipamentos = await equipamentoTecnologicoService.listar();
    res.status(200).json(equipamentos);
} 

exports.cadastrarEquipamento = async (req, res) => {
    const equipamento = await equipamentoTecnologicoService.criar(
        req.body.usuario_id,
        req.body.categoria_id,
        req.body.secretaria_id,
        req.body.fabricante,
        req.body.modelo,
        req.body.num_patrimonio,
        req.body.responsavel,
        req.body.setor,
        req.body.especificacoes,
        req.body.observacoes);
    res.status(201).json(equipamento);
}

exports.buscarEquipamentoPorId = async (req, res) => {
    const equipamento = await equipamentoTecnologicoService.buscarPorId(req.params.id);
    if (equipamento) {
      res.status(200).json(equipamento);
    } else {
      res.status(404).json({ mensagem: 'Equipamento não encontrado' });
    }
} 

exports.atualizarEquipamento = async (req, res) => {
  const equipamento = await equipamentoTecnologicoService.atualizarNome(req.params.id, req.body);
  if (equipamento) {
    res.status(200).json(equipamento);
  } else {
    res.status(404).json({ mensagem: 'Equipamento não encontrado' });
  }
}

exports.deletarEquipamento = async (req, res) => {
  const sucesso = await equipamentoTecnologicoService.deletar(req.params.id);
  if (sucesso) {
    res.status(204).send();
  } else {
    res.status(404).json({ mensagem: 'Equipamento não encontrado' });
  }
}