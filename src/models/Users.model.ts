import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Users = sequelize.define('Users', {
  user: {
    type: DataTypes.STRING(),
    primaryKey: true,
    unique: true
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
  password: {
    type: DataTypes.BLOB,
    allowNull: false
  }
});

export default Users;
