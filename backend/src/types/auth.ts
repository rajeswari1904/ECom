export type UserRole = 'customer' | 'seller' | 'admin';
export type UserStatus = 'active' | 'inactive' | 'suspended';

export interface UserRecord {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  phone?: string | null;
  role: UserRole;
  status: UserStatus;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PublicUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  role: UserRole;
  status: UserStatus;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RegisterRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: UserRole;
  phone?: string;
}

export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: PublicUser;
}
