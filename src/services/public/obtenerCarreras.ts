import models from '@models/index';
import { Op } from 'sequelize';
const { Carreras } = models;

const obtenerCarreras = async ({ querys }) => {
  try {
    const { carrera } = querys;

    const filter = {};

    if (carrera) filter['carrera'] = { [Op.substring]: carrera };

    const carreras = await Carreras.findAll({ where: filter });

    return carreras;
  } catch (err) {
    throw err;
  }
};

export default obtenerCarreras;
