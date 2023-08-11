import sequelize from '@config/db.config';
import models from '@models/index';
import crearAlumno from '@services/admin/alumnos/crearAlumno';
import crearCarrera from '@services/admin/carreras/crearCarrera';
import crearCategoria from '@services/admin/categorias/crearCategoria';
const { Tesis } = models;

const crearTesis = async (body) => {
  try {
    const {
      titulo,
      resumen,
      institucion,
      tesis,
      autor,
      coautor,
      carrera,
      categoria
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

      const alumno = await crearAlumno({
        body: autor,
        transaction: t,
        idCarrera: carreraC.dataValues.id
      });

      const coautorC = coautor
        ? await crearAlumno({
            body: coautor,
            transaction: t,
            idCarrera: carreraC.dataValues.id
          })
        : null;
      console.log({ coautorC });

      const tesisC = await Tesis.create(
        {
          titulo,
          autor: alumno.dataValues.matricula,
          coautor: coautor ? coautorC.dataValues.matricula : null,
          resumen,
          institucion,
          carrera: carreraC.dataValues.id,
          categoria: categoriaC.dataValues.id,
          tesis
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
