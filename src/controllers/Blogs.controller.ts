import {
  crearBlog as cb,
  obtenerBlogs as ob,
  editarBlog as eb,
  obtenerBlog as obo,
  eliminarBlog as db
} from '@services/Blogs';

export const crearBlog = async (req, res) => {
  try {
    const response = await cb({ ...req.body, usuario: 'cabrera' });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({ success: true, response: err });
  }
};

export const obtenerBlogs = async (req, res) => {
  try {
    const response = await ob(req.query);

    res.status(200).json({ success: true, response });
  } catch (err) {
    console.log(err);

    res.status(400).json({ success: false, response: err });
  }
};

export const obtenerBlog = async (req, res) => {
  try {
    const response = await obo(Number(req.params.idblog));

    res.status(200).json({ success: true, response });
  } catch (err) {
    console.log(err);

    res.status(400).json({ success: false, response: err });
  }
};

export const editarBlogs = async (req, res) => {
  try {
    const response = eb(req.body, Number(req.params.idblog));
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({ success: true, response: err });
  }
};

export const eliminarBlog = async (req, res) => {
  try {
    const response = db(Number(req.params.idblog));
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({ success: true, response: err });
  }
};
