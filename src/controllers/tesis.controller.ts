import crearTesis from '@services/admin/tesis/crearTesis';
import crearPortada from '@services/admin/tesis/crearPortada';
import editarTesis from '@services/admin/tesis/editarTesis';
import eliminarTesis from '@services/admin/tesis/eliminarTesis';
import obtenerTesis from '@services/public/obtenerTesis';

export const listTesis = async (req, res) => {
  try {
    const tesis = await obtenerTesis({ querys: req.query });
    res.status(200).json({ ok: true, response: tesis });
  } catch (err) {
    res.status(400).json({ ok: false, msg: 'Error al obtener información' });
  }
};

export const registerTesis = async (req, res) => {
  try {
    const tesis = req.files.tesis;
    const urlSave = `static/media/tesis/${tesis.md5}.pdf`;
    tesis.mv(`src/${urlSave.replace('static', 'public')}`, async (err) => {
      if (err) {
        return res
          .status(400)
          .json({ ok: false, code: 400, msg: 'No se pudo almacenar la tesis' });
      }

      const bodyFile = { ...JSON.parse(req.body.data), tesis: urlSave };
      const create = await crearTesis(bodyFile);
      res.status(200).json({ ok: true, response: create });
    });
  } catch (err) {
    res.status(400).json({ ok: false, msg: 'Error al crear la tesis', err });
  }
};

export const subirPortada = async (req, res) => {
  try {
    const { portada } = req.files;
    const extencion = portada.mimetype.replace('image/', '');

    const urlSave = `static/media/portadas/${portada.md5}.${extencion}`;
    portada.mv(`src/${urlSave.replace('static', 'public')}`, async (err) => {
      if (err) {
        return res
          .status(400)
          .json({ ok: false, code: 400, msg: 'No se pudo cargar la portada' });
      }

      const create = await crearPortada({
        body: { portada: urlSave },
        params: req.params
      });

      res.status(200).json({ ok: true, response: create });
    });
  } catch (err) {
    res.status(400).json({ ok: false, msg: 'Error al crear la tesis', err });
  }
};

export const updateTesis = async (req, res) => {
  try {
    const editar = await editarTesis({
      body: req.body,
      params: req.params
    });

    res.status(200).json({ ok: true, response: editar });
  } catch (err) {
    res.status(400).json({ ok: false, msg: 'Error al editar la tesis', err });
  }
};

export const deleteTesis = async (req, res) => {
  try {
    const eliminar = await eliminarTesis({ params: req.params });
    res.status(200).json({ ok: true, response: eliminar });
  } catch (err) {
    res.status(400).json({ ok: false, msg: 'Error al eliminar la tesis', err });
  }
};
