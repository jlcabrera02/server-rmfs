import { Router } from 'express';
import {
  crearBlog,
  editarBlogs,
  eliminarBlog,
  obtenerBlog,
  obtenerBlogs
} from '@controllers/Blogs.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener/:idblog', obtenerBlog);
router.get('/obtener', obtenerBlogs);
router.post('/crear', verifyAdmin, crearBlog);
router.put('/editar/:idblog', verifyAdmin, editarBlogs);
router.delete('/eliminar/:idblog', verifyAdmin, eliminarBlog);

export default router;
