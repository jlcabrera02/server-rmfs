import models from '@models/index';
import { Op } from 'sequelize';
const { Opciones } = models;

const obtenerOpciones = async ({ querys }) => {
  try {
    const { opcion } = querys;

    const filter = {};

    if (opcion) filter['opcion'] = { [Op.substring]: opcion };

    const opciones = await Opciones.findAll({ where: filter });

    return opciones;
  } catch (err) {
    throw err;
  }
};

export default obtenerOpciones;
