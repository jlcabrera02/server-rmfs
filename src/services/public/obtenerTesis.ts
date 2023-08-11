import models from '@models/index';
import { Op } from 'sequelize';
const { Alumnos, Carreras, Tesis, Categorias } = models;

const obtenerTesis = async ({ querys }) => {
  try {
    const {
      titulo,
      matricula,
      nombre,
      apepat,
      apemat,
      idCarrera,
      idCategoria,
      orderId
    } = querys;

    const filter = {};
    const filtersAutor = {};

    if (titulo) filter['titulo'] = { [Op.substring]: titulo };
    if (idCarrera) filter['carrera'] = idCarrera;
    if (idCategoria) filter['categoria'] = idCategoria;
    if (matricula) filtersAutor['matricula'] = matricula;
    if (nombre) filtersAutor['nombre'] = { [Op.substring]: nombre };
    if (apepat) filtersAutor['apepat'] = { [Op.substring]: apepat };
    if (apemat) filtersAutor['apemat'] = { [Op.substring]: apemat };
    // if (orderId) options['order'] = ['id', orderId];

    const tesis = await Tesis.findAll({
      where: filter,
      include: [
        {
          model: Alumnos,
          where: filtersAutor
        },
        {
          model: Alumnos,
          as: 'Alumno_coautor'
        },
        {
          model: Carreras
        },
        {
          model: Categorias
        }
      ],
      order: [['id', orderId || 'DESC']]
    });

    return tesis;
  } catch (err) {
    throw err;
  }
};

export default obtenerTesis;
