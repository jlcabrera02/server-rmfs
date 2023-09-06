import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Opciones = sequelize.define(
  'Opciones',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    opcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true
  }
);

export default Opciones;
