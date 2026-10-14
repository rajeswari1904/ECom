import { Router } from 'express';

import { checkout } from '../controllers/orderController';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();

router.post('/checkout', requireAuth, checkout);

export default router;
