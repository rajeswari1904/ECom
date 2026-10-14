export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  badge: string;
  stock: 'In stock' | 'Low stock' | 'Out of stock';
  price: number;
  originalPrice: number;
  description: string;
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
  specs: ProductSpec[];
}
