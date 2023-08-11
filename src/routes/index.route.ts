import { Router } from 'express';
import Users from '@routes/login.route';
import Tesis from '@routes/tesis.route';
import Alumnos from '@routes/alumnos.route';
import Carreras from '@routes/carreras.route';
import Categorias from '@routes/categorias.route';

const router = Router();

router.use('/users', Users);
router.use('/tesis', Tesis);
router.use('/alumnos', Alumnos);
router.use('/carreras', Carreras);
router.use('/categorias', Categorias);

export default router;
