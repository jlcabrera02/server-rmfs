import models from '@models/index';
const { Tesis } = models;

const crearPortada = async ({ params, body }) => {
  try {
    const { portada } = body;
    const { idTesis } = params;

    const tesisP = await Tesis.update({ portada }, { where: { id: idTesis } });

    return tesisP;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export default crearPortada;
