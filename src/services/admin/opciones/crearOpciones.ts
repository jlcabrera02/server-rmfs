import models from '@models/index';
const { Opciones } = models;

const crearOpciones = async ({ opcion, transaction }) => {
  try {
    const [opcionF] = await Opciones.findOrCreate({
      where: { opcion },
      transaction
    });
    return opcionF;
  } catch (err) {
    throw err;
  }
};

export default crearOpciones;
