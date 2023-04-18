import { Router } from 'express';
import user from './user.routes.js';
import project from './projects.routes.js';
import category from './category.routes.js';
import login  from './login.routes.js';

const router = Router();

router.use('/user', user);
router.use('/project', project);
router.use('/category', category);
router.use('/login', login);

export default router; 