import { Request, Response } from 'express';

import { AuthRequest, requireAuth } from '../middleware/authMiddleware';
import { authService } from '../services/authService';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = authService.registerUser(req.body || {});
    res.status(201).json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to register user.';
    const status = message.toLowerCase().includes('already exists') ? 409 : 400;
    res.status(status).json({ message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      res.status(400).json({ message: 'Email and password are required.' });
      return;
    }

    const result = authService.loginUser(email, password);
    res.status(200).json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to log in.';
    res.status(401).json({ message });
  }
};

export const getCurrentUser = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: 'Authentication required.' });
      return;
    }

    const user = authService.findUserById(req.user.id);

    if (!user) {
      res.status(404).json({ message: 'User not found.' });
      return;
    }

    res.status(200).json({ user: authService.sanitizeUser(user) });
  } catch (error) {
    console.error('Failed to load current user', error);
    res.status(500).json({ message: 'Unable to load current user.' });
  }
};

export const requireAuthForResponse = requireAuth;
