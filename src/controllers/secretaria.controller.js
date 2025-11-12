const secretariaService = require("../services/secretaria.services")

exports.buscarSecretarias = async (req, res) => {
    const secretarias = await secretariaService.listar();
    res.status(200).json(secretarias);
} 

exports.cadastrarSecretaria = async (req, res) => {
    const secretaria = await secretariaService.criar(req.body.id_usuario,req.body.nome_categoria);
    res.status(201).json(secretaria);
} 

exports.buscarSecretariaPorId = async (req, res) => {
    const secretaria = await secretariaService.buscarPorId(req.params.id);
    if (secretaria) {
      res.status(200).json(secretaria);
    } else {
      res.status(404).json({ mensagem: 'Secretaria não encontrada' });
    }
} 

exports.atualizarSecretaria = async (req, res) => {
  const secretaria = await secretariaService.atualizarNome(req.params.id, req.body);
  if (secretaria) {
    res.status(200).json(secretaria);
  } else {
    res.status(404).json({ mensagem: 'Secretaria não encontrada' });
  }
}

exports.deletarSecretaria = async (req, res) => {
  const sucesso = await secretariaService.deletar(req.params.id);
  if (sucesso) {
    res.status(204).send();
  } else {
    res.status(404).json({ mensagem: 'Secretaria não encontrada' });
  }
}