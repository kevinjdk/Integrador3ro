import { Category } from './category.model';

export class Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  category: Category;
  created_at: Date;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.price = 0;
    this.stock = 0;
    this.category = new Category(); // Asegúrate de inicializar la categoría
    this.created_at = new Date();
  }
}