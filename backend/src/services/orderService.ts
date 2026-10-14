import { productService } from './productService';
import { OrderItemInput, OrderResponse, ShippingAddress } from '../types/order';

interface CheckoutPayload {
  items: OrderItemInput[];
  shippingAddress?: ShippingAddress;
  paymentMethod?: 'razorpay' | 'cod';
}

class OrderService {
  private orders: OrderResponse[] = [];

  async createOrder(userId: number, payload: CheckoutPayload): Promise<OrderResponse> {
    const items = payload.items ?? [];

    if (!Array.isArray(items) || items.length === 0) {
      throw new Error('Your cart is empty.');
    }

    const catalog = await productService.getProducts();
    const validItems = items.map((entry) => {
      const product = catalog.find((item) => item.id === Number(entry.productId));

      if (!product) {
        throw new Error(`Product ${entry.productId} was not found.`);
      }

      if (!Number.isFinite(entry.quantity) || Number(entry.quantity) <= 0) {
        throw new Error(`Invalid quantity for product ${product.name}.`);
      }

      return {
        productId: product.id,
        name: product.name,
        category: product.category,
        image: product.image,
        price: product.price,
        quantity: Number(entry.quantity),
      };
    });

    const subtotal = validItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 99 : 0;
    const discount = Math.round(subtotal * 0.08);
    const total = subtotal + shipping - discount;
    const orderNumber = `ABC-${Date.now()}-${Math.floor(Math.random() * 900 + 100)}`;
    const createdAt = new Date().toISOString();

    const order: OrderResponse = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      userId,
      orderNumber,
      items: validItems,
      subtotal,
      shipping,
      discount,
      total,
      paymentStatus: 'paid',
      paymentMethod: payload.paymentMethod || 'razorpay',
      status: 'confirmed',
      shippingAddress: payload.shippingAddress || null,
      createdAt,
    };

    this.orders.push(order);

    return order;
  }

  getOrdersForUser(userId: number): OrderResponse[] {
    return this.orders.filter((order) => order.userId === userId);
  }
}

export const orderService = new OrderService();
