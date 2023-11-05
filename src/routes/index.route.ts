import { Router } from 'express';
import Users from '@routes/User.route';

const router = Router();

router.use('/users', Users);

export default router;
