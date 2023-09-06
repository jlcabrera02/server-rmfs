import { Router } from 'express';
import {
  createOpcion,
  deleteOpcion,
  listOpciones,
  updateOpciones
} from '@controllers/opciones.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener', listOpciones);

router.post('/crear', verifyAdmin, createOpcion);
router.put('/editar/:idOpcion', verifyAdmin, updateOpciones);
router.delete('/eliminar/:idOpcion', verifyAdmin, deleteOpcion);

export default router;
