import models from '@models/index';
const { Opciones } = models;

const editarOpciones = async ({ body, params }) => {
  try {
    const { opcion } = body;
    const { idOpcion } = params;
    const opcionesU = await Opciones.update(
      { opcion },
      { where: { id: idOpcion } }
    );
    return opcionesU;
  } catch (err) {
    throw err;
  }
};

export default editarOpciones;
