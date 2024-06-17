
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() { }

  getCart() {
    return this.cart;
  }

  addToCart(product: any) {
    const itemIndex = this.cart.findIndex(item => item.id === product.id);
    if (itemIndex === -1) {
      this.cart.push({ ...product, quantity: 1 });
    } else {
      this.cart[itemIndex].quantity++;
    }
  }

  removeFromCart(product: any) {
    const itemIndex = this.cart.findIndex(item => item.id === product.id);
    if (itemIndex !== -1) {
      if (this.cart[itemIndex].quantity > 1) {
        this.cart[itemIndex].quantity--;
      } else {
        this.cart.splice(itemIndex, 1);
      }
    }
  }

  getTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  
  increaseQuantity(product: any) {
    const existingProduct = this.cart.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    }
  }
}
