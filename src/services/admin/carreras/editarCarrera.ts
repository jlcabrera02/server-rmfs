import models from '@models/index';
const { Carreras } = models;

const editarCarrera = async ({ body, params }) => {
  try {
    const { carrera } = body;
    const { idCarrera } = params;
    const carreraU = await Carreras.update(
      { carrera },
      { where: { id: idCarrera } }
    );
    return carreraU;
  } catch (err) {
    throw err;
  }
};

export default editarCarrera;
