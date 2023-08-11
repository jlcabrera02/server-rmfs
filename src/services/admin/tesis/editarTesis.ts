import models from '@models/index';
const { Tesis } = models;

const editarTesis = async ({ body, params }) => {
  try {
    const {
      titulo,
      resumen,
      institucion,
      matriculaAutor,
      matriculaCoautor,
      idCarrera,
      idCategoria
    } = body;
    const { idTesis } = params;
    const coautorC = matriculaCoautor ? matriculaCoautor : null;

    const tesis = await Tesis.update(
      {
        titulo,
        autor: matriculaAutor,
        coautor: coautorC,
        resumen,
        institucion,
        carrera: idCarrera,
        categoria: idCategoria
      },
      { where: { id: idTesis } }
    );

    return tesis;
  } catch (err) {
    throw err;
  }
};

export default editarTesis;
