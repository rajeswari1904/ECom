# ABC LED Test Plan

## API regression coverage

1. Product catalog endpoint returns a populated array.
2. Auth registration creates a new user and issues a JWT.
3. Login authenticates valid credentials and returns user details.
4. Checkout accepts a signed-in user, validates items, and generates an order.
5. Swagger documentation endpoint exposes a valid OpenAPI document.

## Edge scenarios to validate manually

- Invalid login returns a 401 response.
- Duplicate registration returns a clear conflict response.
- Empty cart checkout fails gracefully.
- Missing or expired JWT is rejected on protected routes.
- Product lookup for unknown IDs returns 404.

## Frontend UX checks

- Product cards render correctly across catalog sizes.
- Cart totals update immediately when quantities change.
- Validation errors appear on empty or malformed auth forms.
- Order confirmation page reflects final totals and payment state.
- Navigation and dashboard pages remain responsive on common viewport widths.
