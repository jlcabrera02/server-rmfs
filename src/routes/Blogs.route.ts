import { Router } from 'express';
import {
  crearBlog,
  editarBlogs,
  eliminarBlog,
  obtenerBlogs
} from '@controllers/Blogs.controller';

const router = Router();

router.get('/obtener', obtenerBlogs);
router.get('/obtener/:idblog', obtenerBlogs);
router.post('/crear', crearBlog);
router.put('/editar/:idblog', editarBlogs);
router.delete('/eliminar/:idblog', eliminarBlog);

export default router;
