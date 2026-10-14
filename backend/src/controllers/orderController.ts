import { Response } from 'express';

import { AuthRequest } from '../middleware/authMiddleware';
import { orderService } from '../services/orderService';

export const checkout = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: 'Authentication required.' });
      return;
    }

    const order = await orderService.createOrder(req.user.id, req.body || {});
    res.status(200).json(order);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to create order.';
    const status = message.toLowerCase().includes('cart is empty') || message.toLowerCase().includes('not found') ? 400 : 500;
    res.status(status).json({ message });
  }
};
