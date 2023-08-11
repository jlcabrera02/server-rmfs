import models from '@models/index';
const { Alumnos } = models;

//Funcion rollback con tesis.
const crearAlumno = async ({ body, idCarrera, transaction }) => {
  try {
    const { nombre, apepat, apemat, matricula } = body;

    const [alumno] = await Alumnos.findOrCreate({
      where: { matricula },
      defaults: {
        nombre,
        apepat,
        apemat,
        carrera: idCarrera
      },
      transaction
    });

    return alumno;
  } catch (err) {
    throw err;
  }
};

export default crearAlumno;
