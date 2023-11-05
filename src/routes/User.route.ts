import { Router } from 'express';
import { createUser, findUser } from '@controllers/Users.controller';

const router = Router();

router.post('/create', createUser);
router.post('/auth', findUser);

export default router;
