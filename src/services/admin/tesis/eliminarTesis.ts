import models from '@models/index';
const { Tesis } = models;

const eliminarTesis = async ({ params }) => {
  try {
    const { idTesis } = params;

    const tesisD = await Tesis.destroy({ where: { id: idTesis } });

    return tesisD;
  } catch (err) {
    throw err;
  }
};

export default eliminarTesis;
