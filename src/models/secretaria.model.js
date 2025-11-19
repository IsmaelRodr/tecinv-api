const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const secretaria = sequelize.define('secretaria', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_secretaria: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    }

  }, {
    tableName: 'secretaria',
    timestamps: false
  });
  
  module.exports = secretaria;