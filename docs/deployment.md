# Deployment and hardening checklist

This project is structured for a standard two-service deployment:

- Frontend: Angular app served from Vercel, Netlify, or any static hosting provider
- Backend: Express API served on a Node host such as Render, Railway, or a VPS
- Database: MySQL schema in database/schema.sql and seed data in database/seeds/seed.sql

## Environment variables

Copy the template file before running the app in production:

- backend/.env.example

Required values:

- PORT
- CORS_ORIGIN
- JWT_SECRET
- DB_HOST
- DB_PORT
- DB_NAME
- DB_USER
- DB_PASSWORD
- RAZORPAY_KEY_ID
- RAZORPAY_KEY_SECRET

## Local validation

1. Install dependencies:
   npm install
2. Build the backend:
   npm --prefix backend run build
3. Build the frontend:
   npm --prefix frontend run build
4. Run backend development server:
   npm --prefix backend run dev
5. Run frontend development server:
   npm --prefix frontend run start

## Production readiness

- Use a strong JWT secret and keep it out of version control.
- Disable debug logs in production.
- Use a real MySQL database instead of the fallback in-memory catalog logic.
- Add database migrations and production seeds for each environment.
- Configure HTTPS and secure CORS origin values.
- Add monitoring, rate limiting, request logging, and health checks.
- Store payment and sensitive configuration in your host platform secrets manager.

## Suggested deployment flow

1. Configure production environment variables.
2. Run database migrations or import schema.sql.
3. Deploy backend and set healthcheck to /health.
4. Deploy frontend and set API base URL to the deployed backend domain.
5. Validate user signup, login, checkout, and product API flow.
