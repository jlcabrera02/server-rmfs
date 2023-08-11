import editarCarrera from '@services/admin/carreras/editarCarrera';
import eliminarCarrera from '@services/admin/carreras/eliminarCarrera';
import obtenerCarreras from '@services/public/obtenerCarreras';

export const listCarreras = async (req, res) => {
  try {
    const obtener = await obtenerCarreras({ querys: req.query });
    res.status(200).json({ ok: true, response: obtener });
  } catch (err) {
    res.status(200).json({ ok: true, msg: 'Error al obtener carreras' });
  }
};

export const updateCarrera = async (req, res) => {
  try {
    const editar = await editarCarrera({
      body: req.body,
      params: req.params
    });

    res.status(200).json({ ok: true, response: editar });
  } catch (err) {
    res.status(400).json({ ok: false, msg: 'Error al editar carrera', err });
  }
};

export const deleteCarrera = async (req, res) => {
  try {
    const eliminar = await eliminarCarrera({ params: req.params });
    res.status(200).json({ ok: true, response: eliminar });
  } catch (err) {
    res
      .status(400)
      .json({ ok: false, msg: 'Error al eliminar la carrera', err });
  }
};
