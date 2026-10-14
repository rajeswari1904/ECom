USE abc_led;

INSERT INTO users (first_name, last_name, email, password_hash, phone, role, status, email_verified)
VALUES
  ('Admin', 'User', 'admin@abcled.com', '$2a$10$examplehashplaceholder', '9999999999', 'admin', 'active', 1),
  ('Seller', 'One', 'seller1@abcled.com', '$2a$10$examplehashplaceholder', '8888888888', 'seller', 'active', 1),
  ('Customer', 'One', 'customer1@abcled.com', '$2a$10$examplehashplaceholder', '7777777777', 'customer', 'active', 1);

INSERT INTO categories (name, slug, parent_id, description)
VALUES
  ('LED Bulbs', 'led-bulbs', NULL, 'Energy-efficient lighting for homes and offices'),
  ('LED Panel Lights', 'led-panel-lights', NULL, 'Premium panel lighting for commercial setups'),
  ('LED Tube Lights', 'led-tube-lights', NULL, 'Reliable tube lighting for utility spaces'),
  ('LED Strip Lights', 'led-strip-lights', NULL, 'Flexible decorative and accent lighting'),
  ('Smart LED Lights', 'smart-led-lights', NULL, 'Connected lighting with automation and voice control');

INSERT INTO products (seller_id, category_id, name, slug, sku, brand, description, short_description, price, discount_percent, stock_quantity, stock_status, is_featured, is_approved, status)
VALUES
  (2, 1, 'Smart LED Bulb 12W', 'smart-led-bulb-12w', 'ABC-LED-001', 'ABC LED', 'Smart warm white bulb with energy efficiency and voice compatibility.', 'Warm white smart bulb', 799.00, 10, 120, 'in_stock', 1, 1, 'active'),
  (2, 2, 'Ultra Slim LED Panel 24W', 'ultra-slim-led-panel-24w', 'ABC-LED-002', 'ABC LED', 'Ultra slim commercial panel for offices and retail spaces.', 'Commercial lighting panel', 1299.00, 15, 80, 'in_stock', 1, 1, 'active');
