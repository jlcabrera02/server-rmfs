import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Blogs = sequelize.define('Blogs', {
  idblog: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mostrar: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default Blogs;
