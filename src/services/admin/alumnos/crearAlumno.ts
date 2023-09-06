import models from '@models/index';
const { Alumnos } = models;

//Funcion rollback con tesis.
const crearAlumno = async ({ body, transaction }) => {
  try {
    const { nombre, apepat, apemat, matricula, carrera } = body;

    const [alumno] = await Alumnos.findOrCreate({
      where: { matricula },
      defaults: {
        nombre,
        apepat,
        apemat,
        carrera: carrera.id
      },
      transaction
    });

    return alumno;
  } catch (err) {
    throw err;
  }
};

export default crearAlumno;
