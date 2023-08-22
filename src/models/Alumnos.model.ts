import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Alumnos = sequelize.define('Alumnos', {
  matricula: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'static/media/avatares/default.webp'
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apepat: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apemat: {
    type: DataTypes.STRING,
    allowNull: false
  },
  carrera: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Alumnos;
