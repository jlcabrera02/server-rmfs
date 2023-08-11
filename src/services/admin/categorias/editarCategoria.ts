import models from '@models/index';
const { Categorias } = models;

const editarCategoria = async ({ body, params }) => {
  try {
    const { categoria } = body;
    const { idCategoria } = params;
    const categoriaU = await Categorias.update(
      { categoria },
      { where: { id: idCategoria } }
    );
    return categoriaU;
  } catch (err) {
    throw err;
  }
};

export default editarCategoria;
