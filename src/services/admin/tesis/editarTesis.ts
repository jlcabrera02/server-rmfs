import models from '@models/index';
import crearAlumno from '../alumnos/crearAlumno';
import sequelize from '@config/db.config';
const { Tesis } = models;

const editarTesis = async ({ body, params }) => {
  try {
    const {
      ficha,
      adquisicion,
      titulo,
      autores,
      resumen,
      institucion,
      carrera,
      categoria,
      opcion,
      fecha,
      municipio,
      estado
    } = body;
    const { idTesis } = params;

    const updateTesis = await sequelize.transaction(async (t) => {
      for (let i = 0; i < autores.length; i++) {
        await crearAlumno({
          body: autores[i],
          transaction: t
        });
      }

      const tesis = await Tesis.update(
        {
          ficha,
          adquisicion,
          titulo,
          autores,
          resumen,
          institucion,
          carrera: carrera.id,
          categoria: categoria.id,
          opcion: opcion.id,
          fecha,
          municipio: municipio.municipio,
          estado: estado.estado
        },
        { where: { id: idTesis }, transaction: t }
      );

      return tesis;
    });

    return updateTesis;
  } catch (err) {
    throw err;
  }
};

export default editarTesis;
