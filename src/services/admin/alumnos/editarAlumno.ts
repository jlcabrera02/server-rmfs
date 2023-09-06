import models from '@models/index';
const { Alumnos } = models;

const editarAlumno = async ({ body, params }) => {
  try {
    const { nombre, apepat, apemat, carrera } = body;
    const { matricula } = params;
    const alumno = await Alumnos.update(
      {
        nombre,
        apepat,
        apemat,
        carrera: carrera.id,
        matricula: body.matricula
      },
      { where: { matricula } }
    );

    return alumno;
  } catch (err) {
    throw err;
  }
};

export default editarAlumno;
