import editarCategoria from '@services/admin/categorias/editarCategoria';
import eliminarCategoria from '@services/admin/categorias/eliminarCategoria';
import obtenerCategoria from '@services/public/obtenerCategorias';

export const listCategorias = async (req, res) => {
  try {
    const obtener = await obtenerCategoria({ querys: req.query });
    res.status(200).json({ ok: true, response: obtener });
  } catch (err) {
    res.status(200).json({ ok: true, msg: 'Error al obtener categorias' });
  }
};

export const updateCategoria = async (req, res) => {
  try {
    const editar = await editarCategoria({
      body: req.body,
      params: req.params
    });

    res.status(200).json({ ok: true, response: editar });
  } catch (err) {
    res.status(400).json({ ok: false, msg: 'Error al editar categoria', err });
  }
};

export const deleteCategoria = async (req, res) => {
  try {
    const eliminar = await eliminarCategoria({ params: req.params });
    res.status(200).json({ ok: true, response: eliminar });
  } catch (err) {
    res
      .status(400)
      .json({ ok: false, msg: 'Error al eliminar la categoria', err });
  }
};
