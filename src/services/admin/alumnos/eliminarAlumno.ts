import models from '@models/index';
const { Alumnos } = models;

const eliminarAlumno = async ({ params }) => {
  try {
    const { matricula } = params;
    const alumno = await Alumnos.destroy({ where: { matricula } });

    return alumno;
  } catch (err) {
    throw err;
  }
};

export default eliminarAlumno;
