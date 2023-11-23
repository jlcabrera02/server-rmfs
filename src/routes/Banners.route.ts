import { Router } from 'express';
import {
  crearBanner,
  editarBanner,
  eliminarBanner,
  obtenerBanners
} from '@controllers/Banners.controller';

const router = Router();

router.get('/obtener', obtenerBanners);
router.post('/crear', crearBanner);
router.put('/editar/:idbanner', editarBanner);
router.delete('/eliminar/:idbanner', eliminarBanner);

export default router;
