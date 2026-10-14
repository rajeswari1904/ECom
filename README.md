# ABC LED

ABC LED is a full-stack commerce platform for LED lighting products, built with Angular on the frontend and Node.js + Express on the backend.

## Monorepo structure

- frontend/ — Angular 21 storefront and dashboard UI
- backend/ — Express API for auth, products, and orders
- database/ — MySQL schema and seed scripts
- docs/ — setup and deployment notes

## Completed milestones

- Monorepo setup and workspace configuration
- Angular storefront with landing, product, cart, and checkout flows
- Product catalog API with mock fallback and database-ready structure
- JWT-based auth with register/login/me routes
- Checkout order flow with subtotal, shipping, discount, and totals
- Seller, admin, and customer dashboard screens
- Swagger/OpenAPI docs and generated-style frontend API client
- System design diagram and verification test plan
- Build validation for frontend and backend

## Final deliverables

- Swagger docs: docs/swagger.md and live UI at http://localhost:5000/docs
- System design: docs/system-design.md
- Test plan: docs/test-plan.md
- Generated frontend API service: frontend/src/app/core/services/swagger-api.service.ts

## Quick start

Install dependencies:

npm install

Start the backend:

npm --prefix backend run dev

Start the frontend:

npm --prefix frontend run start

Build all projects:

npm --prefix backend run build
npm --prefix frontend run build

Run backend tests:

npm --prefix backend test -- --runInBand

## Local URLs

- Frontend: http://localhost:4200
- Backend: http://localhost:5000
- Health check: http://localhost:5000/health
- Products API: http://localhost:5000/api/products
- Auth API: http://localhost:5000/api/auth/login and /register
- Checkout API: http://localhost:5000/api/orders/checkout

## Environment configuration

The backend includes a template at backend/.env.example. Copy it to backend/.env and update the values before running in a real environment.

## Setup on another system

For a clean install on a different machine without copying `node_modules`, see [docs/setup-guide.md](docs/setup-guide.md).

## Project update

For a summary of the completed work, current features, and recent shopping-app improvements, see [docs/project-update.md](docs/project-update.md).

## Deployment and hardening

See docs/deployment.md for the production checklist, environment variables, and deployment plan.

## Notes

The project is intentionally organized in milestone-based phases and is currently in a working, build-verified state for local development and deployment preparation.
