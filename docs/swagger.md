# ABC LED API Documentation

The backend exposes a Swagger/OpenAPI document at `/docs` and a raw JSON contract at `/docs-json`.

## Core endpoints

- `GET /health` — service health check
- `GET /api/products` — product catalog
- `GET /api/products/:id` — lookup a product
- `POST /api/auth/register` — create a user account
- `POST /api/auth/login` — authenticate and receive JWT
- `POST /api/orders/checkout` — place an order using the signed-in user

## Example request payloads

### Register

```json
{
  "firstName": "Aarav",
  "lastName": "Sharma",
  "email": "aarav@example.com",
  "password": "StrongPass123!",
  "role": "customer"
}
```

### Login

```json
{
  "email": "aarav@example.com",
  "password": "StrongPass123!"
}
```

### Checkout

```json
{
  "items": [
    { "productId": 1, "quantity": 2 },
    { "productId": 3, "quantity": 1 }
  ],
  "shippingAddress": {
    "line1": "12 Market Road",
    "city": "Bangalore",
    "state": "Karnataka",
    "postcode": "560001",
    "country": "India"
  },
  "paymentMethod": "razorpay"
}
```

## Local URLs

- Swagger UI: http://localhost:5000/docs
- RAW JSON: http://localhost:5000/docs-json
