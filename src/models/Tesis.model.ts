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
    ficha: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    adquisicion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    autores: {
      type: DataTypes.JSON,
      allowNull: false
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
    opcion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    municipio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tesis: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true
  }
);

export default Tesis;
