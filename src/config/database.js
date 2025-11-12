const { Sequelize } = require('sequelize');
require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

// Teste de carregamento do .env
if (!process.env.DB_DATABASE || !process.env.DB_USUARIO || !process.env.DB_SENHA) {
  console.error("❌ Erro: Variáveis de ambiente não foram carregadas. Verifique o caminho do .env");
} else {
  console.log("✅ Variáveis de ambiente carregadas com sucesso!");
  console.log("📦 DB_DATABASE:", process.env.DB_DATABASE);
  // Evite mostrar senha no console:
  // console.log("DB_SENHA:", process.env.DB_SENHA);
}

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USUARIO, process.env.DB_SENHA, {
  host: 'localhost',
  dialect: 'mysql',
  timezone: "-03:00"
});

module.exports = sequelize;