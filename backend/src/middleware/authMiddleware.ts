import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import { UserRole } from '../types/auth';

const JWT_SECRET = process.env.JWT_SECRET || 'abc-led-dev-secret';

export interface AuthRequest extends Request {
  user?: {
    id: number;
    email: string;
    role: UserRole;
  };
}

export const requireAuth = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!token) {
    res.status(401).json({ message: 'Authentication required.' });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload & {
      sub?: number;
      email?: string;
      role?: UserRole;
    };

    const userId = Number(decoded.sub);
    const email = decoded.email || '';
    const role = decoded.role || 'customer';

    if (!userId || !email) {
      throw new Error('Invalid token payload.');
    }

    req.user = {
      id: userId,
      email,
      role,
    };

    next();
  } catch (_error) {
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

export const requireRole = (allowedRoles: UserRole[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({ message: 'Authentication required.' });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      res.status(403).json({ message: 'You do not have permission to access this resource.' });
      return;
    }

    next();
  };
};
