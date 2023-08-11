import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Tesis = sequelize.define(
  'Tesis',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coautor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    resumen: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    institucion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    carrera: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tesis: {
      type: DataTypes.STRING,
      allowNull: false
    },
    portada: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'static/media/portadas/default.jpg'
    }
  },
  {
    freezeTableName: true
  }
);

export default Tesis;
