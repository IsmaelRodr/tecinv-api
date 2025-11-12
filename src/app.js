const express = require('express');
const app = express();
const usuarioRoutes = require("./routes/usuario.routes");
const categoriaRoutes = require("./routes/categoria_equipamento.routes");
// const transacaoRoutes = require("./routes/transacao.routes");
// const saldoPorCategoriasRoutes = require("./routes/saldo-por-categoria.routes");
// const transacoesPorCategoriasRoutes = require("./routes/transacoes-por-categoria.routes");
const sequelize = require("./config/database");

app.use(express.json());

app.use('/usuario', usuarioRoutes);
app.use('/categoriaequipamento', categoriaRoutes);
// app.use('/transacao', transacaoRoutes);
// app.use('/saldoporcategoria', saldoPorCategoriasRoutes);
// app.use('/transacaoporcategoria', transacoesPorCategoriasRoutes);

sequelize.sync().then(() => {
  console.log("Banco de dados sincronizado");
  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });
}).catch((error) => {
  console.error("Erro ao conectar no banco:", error);
});