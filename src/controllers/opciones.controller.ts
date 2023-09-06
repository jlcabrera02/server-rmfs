import crearOpciones from '@services/admin/opciones/crearOpciones';
import editarOpciones from '@services/admin/opciones/editarOpciones';
import eliminarOpcion from '@services/admin/opciones/eliminarOpciones';
import obtenerOpciones from '@services/public/obtenerOpciones';

export const listOpciones = async (req, res) => {
  try {
    const obtener = await obtenerOpciones({ querys: req.query });
    res.status(200).json({ ok: true, response: obtener });
  } catch (err) {
    res.status(200).json({ ok: true, msg: 'Error al obtener opciones' });
  }
};

export const createOpcion = async (req, res) => {
  try {
    const obtener = await crearOpciones({
      opcion: req.body.opcion,
      transaction: null
    });
    res.status(200).json({ ok: true, response: obtener });
  } catch (err) {
    console.log(err);

    res.status(200).json({ ok: false, msg: 'Error al crear opciones' });
  }
};

export const updateOpciones = async (req, res) => {
  try {
    const editar = await editarOpciones({
      body: req.body,
      params: req.params
    });

    res.status(200).json({ ok: true, response: editar });
  } catch (err) {
    res.status(400).json({ ok: false, msg: 'Error al editar opcion', err });
  }
};

export const deleteOpcion = async (req, res) => {
  try {
    const eliminar = await eliminarOpcion({ params: req.params });
    res.status(200).json({ ok: true, response: eliminar });
  } catch (err) {
    res
      .status(400)
      .json({ ok: false, msg: 'Error al eliminar la opcion', err });
  }
};
