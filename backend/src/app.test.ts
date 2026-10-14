import app from './app';

describe('ABC LED API', () => {
  let server: ReturnType<typeof app.listen>;

  beforeAll(async () => {
    server = app.listen(0);
  });

  afterAll(async () => {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      });
    });
  });

  it('returns products from the catalog API', async () => {
    const port = (server.address() as any).port;
    const response = await fetch(`http://127.0.0.1:${port}/api/products`);

    expect(response.status).toBe(200);
    const payload = await response.json();
    expect(Array.isArray(payload)).toBe(true);
    expect(payload.length).toBeGreaterThan(0);
    expect(payload[0]).toHaveProperty('name');
  });

  it('exposes the OpenAPI documentation endpoint', async () => {
    const port = (server.address() as any).port;
    const response = await fetch(`http://127.0.0.1:${port}/docs-json`);

    expect(response.status).toBe(200);
    const payload = await response.json();
    expect(payload.openapi).toBe('3.0.0');
    expect(payload.info.title).toBe('ABC LED API');
    expect(payload.paths['/api/products']).toBeDefined();
  });

  it('registers and logs in a user through the auth API', async () => {
    const port = (server.address() as any).port;
    const email = `tester.${Date.now()}@example.com`;
    const password = 'StrongPass123!';

    const registerResponse = await fetch(`http://127.0.0.1:${port}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: 'Test',
        lastName: 'User',
        email,
        password,
      }),
    });

    expect(registerResponse.status).toBe(201);
    const registerPayload = await registerResponse.json();
    expect(registerPayload).toHaveProperty('token');
    expect(registerPayload.user.email).toBe(email);

    const loginResponse = await fetch(`http://127.0.0.1:${port}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    expect(loginResponse.status).toBe(200);
    const loginPayload = await loginResponse.json();
    expect(loginPayload).toHaveProperty('token');
    expect(loginPayload.user.email).toBe(email);
  });

  it('creates an order from a checkout request', async () => {
    const port = (server.address() as any).port;
    const email = `checkout.${Date.now()}@example.com`;
    const password = 'StrongPass123!';

    const registerResponse = await fetch(`http://127.0.0.1:${port}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: 'Checkout',
        lastName: 'User',
        email,
        password,
      }),
    });

    expect(registerResponse.status).toBe(201);
    const { token } = await registerResponse.json();

    const orderResponse = await fetch(`http://127.0.0.1:${port}/api/orders/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        items: [
          { productId: 1, quantity: 2 },
          { productId: 3, quantity: 1 },
        ],
        shippingAddress: {
          line1: '12 Market Road',
          city: 'Bangalore',
          state: 'Karnataka',
          postcode: '560001',
          country: 'India',
        },
      }),
    });

    expect(orderResponse.status).toBe(200);
    const payload = await orderResponse.json();
    expect(payload).toHaveProperty('orderNumber');
    expect(payload).toHaveProperty('items');
    expect(payload.total).toBeGreaterThan(0);
    expect(payload.paymentStatus).toBe('paid');
  });
});
