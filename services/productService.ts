
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

/**
 * Phase 1: Fetches from local static data.
 * Phase 2: This service can be updated to fetch from a real backend API
 * without changing the UI components.
 */
export const productService = {
  /**
   * Fetches all products. Support for filtering or search can be added here.
   */
  async getAllProducts(): Promise<Product[]> {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(PRODUCTS), 300);
    });
  },

  /**
   * Fetches products by category.
   */
  async getProductsByCategory(category: string): Promise<Product[]> {
    const all = await this.getAllProducts();
    return all.filter(p => p.category.toLowerCase() === category.toLowerCase());
  },

  /**
   * Fetches a single product by ID.
   */
  async getProductById(id: string): Promise<Product | undefined> {
    const all = await this.getAllProducts();
    return all.find(p => p.id === id);
  }
};
