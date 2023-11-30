import { Router } from 'express';
import { createUser, findUser } from '@controllers/Users.controller';
import { verifyAdmin } from '@middlewares/auth';
const router = Router();

router.post('/create', verifyAdmin, createUser);
router.post('/auth', findUser);

export default router;
