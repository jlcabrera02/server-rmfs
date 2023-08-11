import models from '@models/index';
const { Alumnos } = models;

const editarAlumno = async ({ body, params }) => {
  try {
    const { nombre, apepat, apemat, idCarrera } = body;
    const { matricula } = params;
    const alumno = await Alumnos.update(
      { nombre, apepat, apemat, idCarrera },
      { where: { matricula } }
    );

    return alumno;
  } catch (err) {
    throw err;
  }
};

export default editarAlumno;
