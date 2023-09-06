import crearAvatar from '@services/admin/alumnos/crearAvatar';
import editarAlumno from '@services/admin/alumnos/editarAlumno';
import eliminarAlumno from '@services/admin/alumnos/eliminarAlumno';
import obtenerAlumnos from '@services/public/obtenerAlumnos';
import crearAlumno from '@services/admin/alumnos/crearAlumno';

export const listAlumnos = async (req, res) => {
  try {
    const obtener = await obtenerAlumnos({ querys: req.query });
    res.status(200).json({ ok: true, response: obtener });
  } catch (err) {
    res.status(200).json({ ok: true, msg: 'Error al obtener alumnos' });
  }
};

export const subirAvatar = async (req, res) => {
  try {
    const { perfil } = req.files;
    const extencion = perfil.mimetype.replace('image/', '');

    const urlSave = `static/media/avatares/${perfil.md5}.${extencion}`;
    perfil.mv(`src/${urlSave.replace('static', 'public')}`, async (err) => {
      if (err) {
        return res
          .status(400)
          .json({ ok: false, code: 400, msg: 'No se pudo cargar el perfil' });
      }

      const create = await crearAvatar({
        body: { avatar: urlSave },
        params: req.params
      });

      res.status(200).json({ ok: true, response: create });
    });
  } catch (err) {
    res
      .status(400)
      .json({ ok: false, msg: 'Error al crear la imagen de perfil', err });
  }
};

export const nuevoAlumno = async (req, res) => {
  try {
    const insertar = await crearAlumno({
      body: req.body,
      transaction: null
    });
    res.status(200).json({ ok: true, response: insertar });
  } catch (err) {
    res
      .status(400)
      .json({ ok: false, msg: 'Error al crear la imagen de perfil', err });
  }
};

export const updateAlumno = async (req, res) => {
  try {
    const editar = await editarAlumno({
      body: req.body,
      params: req.params
    });

    res.status(200).json({ ok: true, response: editar });
  } catch (err) {
    res.status(400).json({ ok: false, msg: 'Error al editar alumno', err });
  }
};

export const deleteAlumno = async (req, res) => {
  try {
    const eliminar = await eliminarAlumno({ params: req.params });
    res.status(200).json({ ok: true, response: eliminar });
  } catch (err) {
    console.log(err);

    res
      .status(400)
      .json({ ok: false, msg: 'Error al eliminar el alumno', err });
  }
};
