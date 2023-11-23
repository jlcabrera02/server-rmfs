import models from '@models/index';
const { Blogs } = models;

type body = {
  titulo: string;
  fecha: string;
  content: string;
  imagen: string;
  descripcion: string;
  mostrar?: boolean;
  usuario: string;
};

export const crearBlog = async (body: body) => {
  try {
    const blog = await Blogs.create({ ...body });
    return blog;
  } catch (err) {
    throw err;
  }
};

export const obtenerBlogs = async (query: any) => {
  try {
    const filtros = { mostrar: true };

    if (query.mostrar === 'mostrarTodo') {
      delete filtros.mostrar;
    }

    const obtenerBlogs = await Blogs.findAll({
      where: filtros,
      limit: query.limit ? Number(query.limit) : null,
      order: [['createdAt', 'DESC']]
    });

    return obtenerBlogs;
  } catch (err) {
    throw err;
  }
};

export const obtenerBlog = async (id: number) => {
  try {
    const obtenerBlog = await Blogs.findByPk(id);
    if (!obtenerBlog) throw { success: false, msg: 'No existe el elemento' };
    return obtenerBlog;
  } catch (err) {
    throw err;
  }
};

export const editarBlog = async (body: body, id: number) => {
  try {
    const editarBlogs = await Blogs.update(
      { ...body },
      { where: { idblog: id } }
    );
    return editarBlogs;
  } catch (err) {
    throw err;
  }
};

export const eliminarBlog = async (id: number) => {
  try {
    const eliminarBlog = await Blogs.destroy({
      where: { idblog: id }
    });

    return eliminarBlog;
  } catch (err) {
    throw err;
  }
};
