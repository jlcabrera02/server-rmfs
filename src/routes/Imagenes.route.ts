import { Router } from 'express';
import { guardarImagen } from '@controllers/Imagen.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.post('/upload', verifyAdmin, guardarImagen);

export default router;
