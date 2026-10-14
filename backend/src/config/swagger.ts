import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';

const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'ABC LED API',
    version: '1.0.0',
    description: 'Swagger documentation for the ABC LED storefront and commerce backend.',
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Local development server',
    },
  ],
  paths: {
    '/health': {
      get: {
        summary: 'Health check',
        responses: {
          '200': {
            description: 'Service is healthy',
          },
        },
      },
    },
    '/api/products': {
      get: {
        summary: 'List all products',
        responses: {
          '200': {
            description: 'Returns catalog entries',
          },
        },
      },
    },
    '/api/products/{id}': {
      get: {
        summary: 'Get a single product by ID',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': { description: 'Product found' },
          '404': { description: 'Product not found' },
        },
      },
    },
    '/api/auth/register': {
      post: {
        summary: 'Register a new user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['firstName', 'lastName', 'email', 'password'],
                properties: {
                  firstName: { type: 'string' },
                  lastName: { type: 'string' },
                  email: { type: 'string', format: 'email' },
                  password: { type: 'string', minLength: 8 },
                  role: { type: 'string', enum: ['customer', 'seller', 'admin'] },
                },
              },
            },
          },
        },
        responses: {
          '201': { description: 'User created' },
          '400': { description: 'Validation error' },
          '409': { description: 'User already exists' },
        },
      },
    },
    '/api/auth/login': {
      post: {
        summary: 'Log in a user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                  email: { type: 'string', format: 'email' },
                  password: { type: 'string' },
                },
              },
            },
          },
        },
        responses: {
          '200': { description: 'Authenticated user payload returned' },
          '401': { description: 'Invalid credentials' },
        },
      },
    },
    '/api/orders/checkout': {
      post: {
        summary: 'Create a checkout order',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['items'],
                properties: {
                  items: {
                    type: 'array',
                    items: {
                      type: 'object',
                      required: ['productId', 'quantity'],
                      properties: {
                        productId: { type: 'integer' },
                        quantity: { type: 'integer', minimum: 1 },
                      },
                    },
                  },
                  shippingAddress: {
                    type: 'object',
                    properties: {
                      line1: { type: 'string' },
                      city: { type: 'string' },
                      state: { type: 'string' },
                      postcode: { type: 'string' },
                      country: { type: 'string' },
                    },
                  },
                  paymentMethod: { type: 'string', enum: ['razorpay', 'cod'] },
                },
              },
            },
          },
        },
        responses: {
          '200': { description: 'Order created successfully' },
          '400': { description: 'Cart empty or invalid item' },
          '401': { description: 'Authentication required' },
        },
      },
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
};

export const setupSwagger = (app: Express): void => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.get('/docs-json', (_req, res) => {
    res.json(swaggerDocument);
  });
};
