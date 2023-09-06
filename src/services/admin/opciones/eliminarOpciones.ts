import models from '@models/index';
const { Opciones } = models;

const eliminarOpcion = async ({ params }) => {
  try {
    const { idOpcion } = params;
    const opcionD = await Opciones.destroy({ where: { id: idOpcion } });
    return opcionD;
  } catch (err) {
    throw err;
  }
};

export default eliminarOpcion;
