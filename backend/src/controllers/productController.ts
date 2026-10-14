import { Request, Response } from 'express';

import { productService } from '../services/productService';

export const getProducts = async (_req: Request, res: Response): Promise<void> => {
  try {
    const products = await productService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error('Failed to load products', error);
    res.status(500).json({ message: 'Unable to load products' });
  }
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = Number(req.params.id);
    const product = await productService.getProductById(productId);

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('Failed to load product', error);
    res.status(500).json({ message: 'Unable to load product' });
  }
};
