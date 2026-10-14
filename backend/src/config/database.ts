import mysql, { Pool } from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'abc_led',
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_CONNECTION_LIMIT || 10),
  queueLimit: 0,
};

let pool: Pool | null = null;

export const getDatabasePool = (): Pool | null => {
  if (pool) {
    return pool;
  }

  const hasConnectionInfo = process.env.DB_HOST || process.env.DB_NAME;

  if (!hasConnectionInfo) {
    return null;
  }

  pool = mysql.createPool(dbConfig);
  return pool;
};

export const isDatabaseAvailable = async (): Promise<boolean> => {
  try {
    const poolInstance = getDatabasePool();
    if (!poolInstance) {
      return false;
    }

    await poolInstance.query('SELECT 1');
    return true;
  } catch {
    return false;
  }
};
