import { Router } from 'express';
import {
  deleteCarrera,
  listCarreras,
  updateCarrera
} from '@controllers/carreras.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener', listCarreras);

router.put('/editar/:idCarrera', verifyAdmin, updateCarrera);
router.delete('/eliminar/:idCarrera', verifyAdmin, deleteCarrera);

export default router;
