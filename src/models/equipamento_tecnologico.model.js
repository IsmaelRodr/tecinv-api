const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const equipamento_tecnologico = sequelize.define('equipamento_tecnologico', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreingKey: true
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreingKey: true
    },
    secretaria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreingKey: true
    },
    fabricante: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    modelo: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    num_patrimonio: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    responsavel: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    setor: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    especificacoes: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    observacoes: {
        type: DataTypes.STRING(100),
        allowNull: true,
    }

  }, {
    tableName: 'equipamento_tecnologico',
    timestamps: false
  });
  
  module.exports = equipamento_tecnologico;