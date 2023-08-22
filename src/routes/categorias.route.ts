import { Router } from 'express';
import {
  createCategorias,
  deleteCategoria,
  listCategorias,
  updateCategoria
} from '@controllers/categorias.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener', listCategorias);
router.post('/crear', createCategorias);

router.put('/editar/:idCategoria', verifyAdmin, updateCategoria);
router.delete('/eliminar/:idCategoria', verifyAdmin, deleteCategoria);

export default router;
