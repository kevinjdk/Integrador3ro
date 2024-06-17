import { Component } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/carrito.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'] // Corrige el nombre de la propiedad a 'styleUrls'
})
export class ProductComponent {
  products: any[] = [];
  responsiveOptions: any[] = [];
  productos: any[] =[];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProductsSmall().then((products: any) => {
      this.products = products;
    });

    this.productService.getProductsSmall2().then((productos: any) => {
      this.productos = productos;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'OUTOFSTOCK':
        return 'danger';
      case 'LOWSTOCK':
        return 'warning';
      default:
        return 'info';
    }
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
