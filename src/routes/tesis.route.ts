import { Router } from 'express';
import {
  deleteTesis,
  registerTesis,
  updateTesis,
  listTesis,
  getTesis,
  updateTesisPDF,
  getTesisFile
} from '@controllers/tesis.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener', listTesis);
router.get('/obtener/:idTesis', getTesis);
router.get('/tesispdf/:archivo', getTesisFile);

router.post('/create', verifyAdmin, registerTesis);
router.put('/editar/:idTesis', verifyAdmin, updateTesis);
router.put('/editarPDF/:idTesis', verifyAdmin, updateTesisPDF);
router.delete('/eliminar/:idTesis', verifyAdmin, deleteTesis);

export default router;
