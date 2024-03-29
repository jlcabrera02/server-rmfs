import sequelize from '@config/db.config';
import useBcrypt from 'sequelize-bcrypt';
import { DataTypes } from 'sequelize';

const Users = sequelize.define('users', {
  username: {
    type: DataTypes.STRING,
    primaryKey: true
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
  perfil: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'static/public/media/default.webp'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

useBcrypt(Users, {
  field: 'password',
  rounds: 12,
  compare: 'authenticate'
});

export default Users;
