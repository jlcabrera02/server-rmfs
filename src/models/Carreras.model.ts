import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Carreras = sequelize.define('Carreras', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  carrera: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Carreras;
