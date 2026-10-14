import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { AuthResponse, PublicUser, RegisterRequestBody, UserRecord, UserRole } from '../types/auth';

const JWT_SECRET = process.env.JWT_SECRET || 'abc-led-dev-secret';

const users: UserRecord[] = [];

const isValidEmail = (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const normalizeRole = (value?: UserRole): UserRole => {
  if (value === 'seller' || value === 'admin') {
    return value;
  }

  return 'customer';
};

export const sanitizeUser = (user: UserRecord): PublicUser => ({
  id: user.id,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  phone: user.phone,
  role: user.role,
  status: user.status,
  emailVerified: user.emailVerified,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

export const createToken = (user: UserRecord): string =>
  jwt.sign(
    {
      sub: user.id,
      email: user.email,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

export const findUserByEmail = (email: string): UserRecord | undefined =>
  users.find((user) => user.email.toLowerCase() === email.trim().toLowerCase());

export const findUserById = (userId: number): UserRecord | undefined =>
  users.find((user) => user.id === userId);

export const registerUser = (payload: RegisterRequestBody): AuthResponse => {
  const firstName = payload.firstName?.trim();
  const lastName = payload.lastName?.trim();
  const email = payload.email?.trim();
  const password = payload.password || '';

  if (!firstName || !lastName) {
    throw new Error('First name and last name are required.');
  }

  if (!email || !isValidEmail(email)) {
    throw new Error('A valid email is required.');
  }

  if (password.length < 8) {
    throw new Error('Password must be at least 8 characters long.');
  }

  if (findUserByEmail(email)) {
    throw new Error('An account with this email already exists.');
  }

  const now = new Date().toISOString();
  const user: UserRecord = {
    id: Date.now() + Math.floor(Math.random() * 1000),
    firstName,
    lastName,
    email: email.toLowerCase(),
    passwordHash: bcrypt.hashSync(password, 10),
    role: normalizeRole(payload.role),
    phone: payload.phone || null,
    status: 'active',
    emailVerified: false,
    createdAt: now,
    updatedAt: now,
  };

  users.push(user);

  return {
    token: createToken(user),
    user: sanitizeUser(user),
  };
};

export const loginUser = (email: string, password: string): AuthResponse => {
  const user = findUserByEmail(email);

  if (!user) {
    throw new Error('Invalid email or password.');
  }

  const isPasswordValid = bcrypt.compareSync(password, user.passwordHash);

  if (!isPasswordValid) {
    throw new Error('Invalid email or password.');
  }

  return {
    token: createToken(user),
    user: sanitizeUser(user),
  };
};

export const authService = {
  registerUser,
  loginUser,
  findUserByEmail,
  findUserById,
  sanitizeUser,
};
