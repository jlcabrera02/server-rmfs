import models from '@models/index';
const { Banners } = models;

type body = {
  imagen: string;
  usuario: string;
  mostrar?: boolean;
  titulo: string;
  descripcion: string;
};

export const obtenerBanners = async (querys: any) => {
  try {
    const filtros = { mostrar: true };

    if (querys.mostrar === 'mostrarTodo') {
      delete filtros.mostrar;
    }

    const crear = await Banners.findAll({
      where: filtros,
      order: [['createdAt', 'DESC']]
    });

    return crear;
  } catch (err) {
    throw err;
  }
};

export const crearBanner = async (body: body) => {
  try {
    const { imagen, usuario, descripcion, titulo } = body;
    const banner = await Banners.create({
      imagen,
      usuario,
      descripcion,
      titulo,
      mostrar: true
    });
    return banner;
  } catch (err) {
    throw err;
  }
};

export const editarBanner = async (body: body, id: number) => {
  try {
    const actualizar = await Banners.update(body, { where: { idbanner: id } });
    return actualizar;
  } catch (err) {
    throw err;
  }
};

export const eliminarBanner = async (id: number) => {
  try {
    const eliminar = await Banners.destroy({ where: { idbanner: id } });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
