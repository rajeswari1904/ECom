import { products } from '../data/products';
import { Product } from '../types/product';
import { isDatabaseAvailable } from '../config/database';

export class ProductService {
  async getProducts(): Promise<Product[]> {
    const databaseReady = await isDatabaseAvailable();

    if (!databaseReady) {
      return products;
    }

    return products;
  }

  async getProductById(id: number): Promise<Product | undefined> {
    const databaseReady = await isDatabaseAvailable();

    if (!databaseReady) {
      return products.find((product) => product.id === id);
    }

    return products.find((product) => product.id === id);
  }
}

export const productService = new ProductService();
