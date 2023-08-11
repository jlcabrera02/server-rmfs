import sequelize from '@config/db.config';
import models from '@models/index';
import Jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();
import { Op } from 'sequelize';
const { Users } = models;

const sign = (data) => {
  return Jwt.sign(data, process.env.PRIVATE_KEY, { expiresIn: 60 * 60 * 24 });
};

const Login = async (body) => {
  try {
    const { user, password } = body;
    const userAuth = await Users.findOne({
      attributes: [
        'nombre',
        'apepat',
        'apemat',
        'user',
        'createdAt',
        'updatedAt'
      ],
      where: {
        user: user,
        [Op.and]: sequelize.where(
          sequelize.literal(`CAST(aes_decrypt(password, '') AS CHAR)`),
          password
        )
      }
    });

    if (userAuth) {
      return {
        ...userAuth.dataValues,
        token: sign({ ...userAuth.dataValues })
      };
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export default Login;
