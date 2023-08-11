import models from '@models/index';
const { Categorias } = models;

const crearCategoria = async ({ categoria, transaction }) => {
  try {
    const [categoriaC] = await Categorias.findOrCreate({
      where: { categoria },
      transaction
    });

    return categoriaC;
  } catch (err) {
    throw err;
  }
};

export default crearCategoria;
