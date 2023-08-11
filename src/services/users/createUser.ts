import sequelize from '@config/db.config';
import models from '@models/index';
const { Users } = models;

const createUser = async (body) => {
  try {
    const { nombre, apepat, apemat, password, user } = body;
    const create = await Users.create({
      user: user.trim(),
      nombre: nombre.toUpperCase().trim(),
      apepat: apepat.toUpperCase().trim(),
      apemat: apemat.toUpperCase().trim(),
      password: sequelize.fn('aes_encrypt', password, '')
    });
    return create;
  } catch (err) {
    throw err;
  }
};

export default createUser;
