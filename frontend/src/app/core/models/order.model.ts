export interface OrderItemInput {
  productId: number;
  quantity: number;
}

export interface ShippingAddress {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
}

export interface OrderResponse {
  id: number;
  userId: number;
  orderNumber: string;
  items: Array<{
    productId: number;
    name: string;
    category: string;
    image: string;
    price: number;
    quantity: number;
  }>;
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentMethod: 'razorpay' | 'cod';
  status: 'pending_payment' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: ShippingAddress | null;
  createdAt: string;
}
