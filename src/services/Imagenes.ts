import Imagenes from '@models/Imagenes.model';

interface body {
  imagen: string;
  usuario: string;
}

export const guardarImagen = async (body: body) => {
  try {
    const { imagen, usuario } = body;
    const crearImagen = await Imagenes.create({
      imagen,
      usuario
    });
    return crearImagen;
  } catch (err) {
    throw err;
  }
};

export const eliminarImagen = async (id: number) => {
  try {
    const imagen = await Imagenes.destroy({ where: { idimagen: id } });

    return imagen;
  } catch (err) {
    throw err;
  }
};
