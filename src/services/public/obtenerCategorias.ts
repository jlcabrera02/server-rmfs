import models from '@models/index';
import { Op } from 'sequelize';
const { Categorias } = models;

const obtenerCategoria = async ({ querys }) => {
  try {
    const { categoria } = querys;

    const filter = {};

    if (categoria) filter['categoria'] = { [Op.substring]: categoria };

    const categorias = await Categorias.findAll({ where: filter });

    return categorias;
  } catch (err) {
    throw err;
  }
};

export default obtenerCategoria;
