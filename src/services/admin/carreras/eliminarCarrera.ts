import models from '@models/index';
const { Carreras } = models;

const eliminarCarrera = async ({ params }) => {
  try {
    const { idCarrera } = params;
    const carreraD = await Carreras.destroy({ where: { id: idCarrera } });
    return carreraD;
  } catch (err) {
    throw err;
  }
};

export default eliminarCarrera;
