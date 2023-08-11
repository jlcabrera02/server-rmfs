import models from '@models/index';
const { Carreras } = models;

const crearCarrera = async ({ carrera, transaction }) => {
  try {
    const [carreraF] = await Carreras.findOrCreate({
      where: { carrera },
      transaction
    });
    return carreraF;
  } catch (err) {
    throw err;
  }
};

export default crearCarrera;
