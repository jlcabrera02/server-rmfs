import models from '@models/index';
const DB: any = models;
const { Users } = DB;

export interface Users {
  username: string;
  nombre: string;
  apepat: string;
  apemat: string;
  password: string;
  perfil?: string;
}

export const createUser = async (body: Users) => {
  try {
    const user = await Users.create({ ...body });
    return user;
  } catch (err) {
    throw err;
  }
};

export const findUser = async (body: Users) => {
  try {
    const user = await Users.findOne({
      where: { username: body.username }
    });

    const authenticate = user.authenticate(body.password);
    if (!authenticate) throw { msg: 'Error contraseña incorrecta' };
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
