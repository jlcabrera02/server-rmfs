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
      orderId,
      limit,
      offset
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

    const tesis = await Tesis.findAndCountAll({
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
      order: [['id', orderId || 'DESC']],
      // offset: offset ? (Number(offset) === 1 ? null : Number(offset)) : null,
      offset: offset ? Number(offset) : null,
      limit: Number(limit) || 10
    });

    return tesis;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export const obtenerTesisPorId = async ({ params }) => {
  try {
    const { idTesis } = params;
    const tesis = await Tesis.findByPk(idTesis, {
      include: [
        {
          model: Alumnos
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
      ]
    });
    return tesis;
  } catch (err) {
    throw err;
  }
};

export default obtenerTesis;
