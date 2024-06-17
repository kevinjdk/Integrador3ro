import { Component } from '@angular/core';
import { CartService } from '../../core/services/carrito.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
  }
  increaseQuantity(product: any) {
    this.cartService.increaseQuantity(product);
    this.cart = this.cartService.getCart();
  }
  getTotal() {
    return this.cartService.getTotal();
  }
}
