import sequelize from '@config/db.config';
import models from '@models/index';
import crearAlumno from '@services/admin/alumnos/crearAlumno';
import crearCarrera from '@services/admin/carreras/crearCarrera';
import crearCategoria from '@services/admin/categorias/crearCategoria';
import crearOpciones from '../opciones/crearOpciones';
const { Tesis } = models;

const crearTesis = async (body) => {
  try {
    const {
      ficha,
      adquisicion,
      titulo,
      resumen,
      institucion,
      tesis,
      autores,
      carrera,
      categoria,
      opcion,
      fecha,
      municipio,
      estado
    } = body;

    const createTesis = await sequelize.transaction(async (t) => {
      const carreraC = await crearCarrera({
        carrera: carrera.carrera,
        transaction: t
      });

      const categoriaC = await crearCategoria({
        categoria: categoria.categoria,
        transaction: t
      });

      const opcionesC = await crearOpciones({
        opcion: opcion.opcion,
        transaction: t
      });

      for (let i = 0; i < autores.length; i++) {
        await crearAlumno({
          body: autores[i],
          transaction: t
        });
      }

      const tesisC = await Tesis.create(
        {
          ficha,
          adquisicion,
          titulo,
          autores,
          resumen,
          institucion,
          carrera: carreraC.dataValues.id,
          categoria: categoriaC.dataValues.id,
          opcion: opcionesC.dataValues.id,
          tesis,
          fecha,
          municipio: municipio.municipio,
          estado: estado.estado
        },
        { transaction: t }
      );

      return tesisC;
    });

    return createTesis;
  } catch (err) {
    throw err;
  }
};

export default crearTesis;
