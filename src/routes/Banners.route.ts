import { Router } from 'express';
import {
  crearBanner,
  editarBanner,
  eliminarBanner,
  obtenerBanners
} from '@controllers/Banners.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener', verifyAdmin, obtenerBanners);
router.post('/crear', verifyAdmin, crearBanner);
router.put('/editar/:idbanner', verifyAdmin, editarBanner);
router.delete('/eliminar/:idbanner', verifyAdmin, eliminarBanner);

export default router;
