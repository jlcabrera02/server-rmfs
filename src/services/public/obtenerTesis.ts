import models from '@models/index';
import { Op } from 'sequelize';
const { Carreras, Tesis, Categorias, Opciones } = models;

const obtenerTesis = async ({ querys }) => {
  try {
    const {
      titulo,
      matricula,
      nombre,
      apepat,
      apemat,
      idcarrera,
      idcategoria,
      idopcion,
      orderId,
      limit,
      offset
    } = querys;

    const filter = {};
    const filtersAutor = {};

    if (titulo) filter['titulo'] = { [Op.substring]: titulo };
    if (idcarrera) filter['carrera'] = idcarrera;
    if (idcategoria) filter['categoria'] = idcategoria;
    if (idopcion) filter['opcion'] = idopcion;
    if (matricula) filtersAutor['matricula'] = matricula;
    if (nombre) filtersAutor['nombre'] = { [Op.substring]: nombre };
    if (apepat) filtersAutor['apepat'] = { [Op.substring]: apepat };
    if (apemat) filtersAutor['apemat'] = { [Op.substring]: apemat };
    // if (orderId) options['order'] = ['id', orderId];

    const tesis = await Tesis.findAndCountAll({
      where: filter,
      include: [
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
          model: Opciones
        },
        {
          model: Carreras
        },
        {
          model: Categorias
        }
      ]
    });
    if (!tesis) {
      throw { ok: false, code: 400, msg: 'No se encontro la tesis' };
    }

    return tesis;
  } catch (err) {
    throw err;
  }
};

export default obtenerTesis;
