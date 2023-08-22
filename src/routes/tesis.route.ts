import { Router } from 'express';
import {
  deleteTesis,
  registerTesis,
  subirPortada,
  updateTesis,
  listTesis,
  getTesis
} from '@controllers/tesis.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener', listTesis);
router.get('/obtener/:idTesis', getTesis);

router.post('/create', registerTesis);
router.put('/cambiarPortada/:idTesis', verifyAdmin, subirPortada);
router.put('/editar/:idTesis', verifyAdmin, updateTesis);
router.delete('/eliminar/:idTesis', verifyAdmin, deleteTesis);

export default router;
