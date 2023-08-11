import models from '@models/index';
import { Op } from 'sequelize';
const { Alumnos, Carreras } = models;

const obtenerAlumnos = async ({ querys }) => {
  try {
    const { idCarrera, matricula, nombre, apepat, apemat, carrera } = querys;

    const filter = {};
    const filterCarrera = {};

    if (idCarrera) filter['carrera'] = idCarrera;
    if (matricula) filter['matricula'] = matricula;
    if (nombre) filter['nombre'] = { [Op.substring]: nombre };
    if (apepat) filter['apepat'] = { [Op.substring]: apepat };
    if (apemat) filter['apemat'] = { [Op.substring]: apemat };
    if (carrera) filterCarrera['carrera'] = { [Op.substring]: carrera };

    const alumno = await Alumnos.findAll({
      where: filter,
      include: {
        model: Carreras,
        where: filterCarrera
      }
    });

    return alumno;
  } catch (err) {
    throw err;
  }
};

export default obtenerAlumnos;
