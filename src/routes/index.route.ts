import { Router } from 'express';
import Users from '@routes/User.route';
import Img from '@routes/Imagenes.route';
import blogs from '@routes/Blogs.route';
import banners from '@routes/Banners.route';

const router = Router();

router.use('/users', Users);
router.use('/img', Img);
router.use('/blogs', blogs);
router.use('/banners', banners);

export default router;
