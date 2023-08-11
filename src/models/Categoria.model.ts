import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Categorias = sequelize.define('Categorias', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Categorias;
