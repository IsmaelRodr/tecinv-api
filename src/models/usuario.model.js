const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    
  }, {
    tableName: 'usuario',
    timestamps: false
  });
  
  module.exports = usuario;