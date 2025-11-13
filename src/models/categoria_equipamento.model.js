const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const categoria_equipamento = sequelize.define('categoria_equipamento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_categoria: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    }

  }, {
    tableName: 'categoria_equipamento',
    timestamps: false
  });
  
  module.exports = categoria_equipamento;