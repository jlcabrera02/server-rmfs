import { Router } from 'express';
import {
  deleteAlumno,
  listAlumnos,
  subirAvatar,
  updateAlumno
} from '@controllers/alumnos.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener', listAlumnos);

router.put('/cambiarPerfilXmatricula/:matricula', verifyAdmin, subirAvatar);
router.put('/editarXmatricula/:matricula', verifyAdmin, updateAlumno);
router.delete('/eliminarXmatricula/:matricula', verifyAdmin, deleteAlumno);

export default router;
