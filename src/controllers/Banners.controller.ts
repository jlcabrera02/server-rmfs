import {
  crearBanner as cb,
  obtenerBanners as ob,
  editarBanner as eb,
  eliminarBanner as db
} from '@services/Banners';
import guardarImagen from '@utils/guardarImagen';

export const crearBanner = async (req, res) => {
  try {
    const nombreImg = await guardarImagen({ imagen: req.files.imagen });

    const response = await cb({
      ...JSON.parse(req.body.body),
      usuario: 'cabrera',
      imagen: `/static/media/imagenes/${nombreImg}`
    });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({ success: true, response: err });
  }
};

export const obtenerBanners = async (req, res) => {
  try {
    const response = await ob(req.query);
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({ success: true, response: err });
  }
};

export const editarBanner = async (req, res) => {
  try {
    const response = await eb(req.body, req.params.idbanner);
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({ success: true, response: err });
  }
};

export const eliminarBanner = async (req, res) => {
  try {
    const response = await db(Number(req.params.idbanner));
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({ success: true, response: err });
  }
};
