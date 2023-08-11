import models from '@models/index';
const { Alumnos } = models;

const crearAvatar = async ({ body, params }) => {
  try {
    const { avatar } = body;
    const { matricula } = params;
    const alumno = await Alumnos.update({ avatar }, { where: { matricula } });

    return alumno;
  } catch (err) {
    throw err;
  }
};

export default crearAvatar;
