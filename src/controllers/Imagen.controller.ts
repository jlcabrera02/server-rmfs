import { guardarImagen as gim } from '@services/Imagenes';
import guardarImgServer from '@utils/guardarImagen';

export const guardarImagen = async (req, res) => {
  try {
    const nombre = await guardarImgServer({ imagen: req.files.imagen });

    const response = await gim({
      imagen: `/static/media/imagenes/${nombre}`,
      usuario: 'cabrera'
    });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({ success: true, response: err });
  }
};
