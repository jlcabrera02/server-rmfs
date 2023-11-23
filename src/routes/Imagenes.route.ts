import { Router } from 'express';
import { guardarImagen } from '@controllers/Imagen.controller';

const router = Router();

router.post('/upload', guardarImagen);

export default router;
