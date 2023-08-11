import models from '@models/index';
const { Categorias } = models;

const eliminarCategoria = async ({ params }) => {
  try {
    const { idCategoria } = params;
    const categoriaD = await Categorias.destroy({ where: { id: idCategoria } });
    return categoriaD;
  } catch (err) {
    throw err;
  }
};

export default eliminarCategoria;
