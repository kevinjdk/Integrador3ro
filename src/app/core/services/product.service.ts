import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  getProductsSmall(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const products: any[] = [
        {
          id: '1',
          code: 'f230fh0g3',
          name: 'Polo Punto Cremallera',
          description: 'Buzo polo color azul',
          image: 'https://static.zara.net/assets/public/71a0/aefb/6c8b467a93ab/a5515e39e126/06674405800-e1/06674405800-e1.jpg?ts=1706093248961&w=563',
          price: 65.99,
          category: 'Cloth',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
        },
        {
          id: '2',
          code: 'f230fh0g3',
          name: 'Blazer Traje 100% Lino',
          description: 'Blazer de lino',
          image: 'https://static.zara.net/assets/public/d117/3313/2ecb45af963b/d547afc7a3ab/04307408505-e1/04307408505-e1.jpg?ts=1705504324665&w=288',
          price: 159.00,
          category: 'Cloth',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
        },
        {
          id: '3',
          code: 'f230fh0g3',
          name: 'Camisa 100% Lino',
          description: 'Camiseta de Lino beach',
          image: 'https://static.zara.net/assets/public/f999/362c/f16f4efaa8e6/1c31449eb619/01063406832-e1/01063406832-e1.jpg?ts=1708074154093&w=288',
          price: 49.99,
          category: 'Cloth',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
        },
        {
          id: '4',
          code: 'f230fh0g3',
          name: 'Camiseta Azul',
          description: 'Camiseta color azul',
          image: 'https://primefaces.org/cdn/primeng/images/demo/product/blue-t-shirt.jpg',
          price: 35.00,
          category: 'Cloth',
          quantity: 24,
          inventoryStatus: 'LOWSTOCK',
          rating: 5
        },
        {
          id: '5',
          code: 'f230fh0g3',
          name: 'Sobrecamisa Estructura Boucle',
          description: 'Es una sobrecamisa',
          image: 'https://static.zara.net/assets/public/4583/daab/ea294a8ba852/d427297ad631/00706338502-e1/00706338502-e1.jpg?ts=1704365312767&w=563',
          price: 109.00,
          category: 'Cloth',
          quantity: 24,
          inventoryStatus: 'OUTOFSTOCK',
          rating: 5
        },
        {
          id: '6',
          code: 'f230fh0g3',
          name: 'Sobrecamisa Boxy Fit',
          description: 'Es una sobrecamisa boxy fit',
          image: 'https://static.zara.net/assets/public/9f78/5f5e/d63a4c5f9649/399584a4fcbf/04526007800-e1/04526007800-e1.jpg?ts=1707742486614&w=563',
          price: 65.99,
          category: 'Cloth',
          quantity: 24,
          inventoryStatus: 'OUTOFSTOCK',
          rating: 5
        },
        {
          id: '7',
          code: 'f230fh0g3',
          name: 'Sobrecamisa Lino - Algodon',
          description: 'Sobrecamisa de lino - algodon',
          image: 'https://static.zara.net/assets/public/3748/a9c7/cb2f460ba20d/0771ea944779/03715307052-e1/03715307052-e1.jpg?ts=1712830629848&w=563',
          price: 65.99,
          category: 'Cloth',
          quantity: 24,
          inventoryStatus: 'OUTOFSTOCK',
          rating: 5
        },
      ];
      resolve(products);
    });
  }
  getProductsSmall2(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const productos: any[] = [
        {
          id: '4',
          code: 'f230fh0g3',
          name: 'Camiseta Azul',
          description: 'Camiseta color azul',
          image: 'https://primefaces.org/cdn/primeng/images/demo/product/blue-t-shirt.jpg',
          price: 35.00,
          category: 'Cloth',
          quantity: 24,
          inventoryStatus: 'LOWSTOCK',
          rating: 5
        },
        {
          id: '5',
          code: 'f230fh0g3',
          name: 'Sobrecamisa Estructura Boucle',
          description: 'Es una sobrecamisa',
          image: 'https://static.zara.net/assets/public/4583/daab/ea294a8ba852/d427297ad631/00706338502-e1/00706338502-e1.jpg?ts=1704365312767&w=563',
          price: 109.00,
          category: 'Cloth',
          quantity: 24,
          inventoryStatus: 'OUTOFSTOCK',
          rating: 5
        },
        {
          id: '6',
          code: 'f230fh0g3',
          name: 'Sobrecamisa Boxy Fit',
          description: 'Es una sobrecamisa boxy fit',
          image: 'https://static.zara.net/assets/public/9f78/5f5e/d63a4c5f9649/399584a4fcbf/04526007800-e1/04526007800-e1.jpg?ts=1707742486614&w=563',
          price: 65.99,
          category: 'Cloth',
          quantity: 24,
          inventoryStatus: 'OUTOFSTOCK',
          rating: 5
        },
        {
          id: '7',
          code: 'f230fh0g3',
          name: 'Sobrecamisa Lino - Algodon',
          description: 'Sobrecamisa de lino - algodon',
          image: 'https://static.zara.net/assets/public/3748/a9c7/cb2f460ba20d/0771ea944779/03715307052-e1/03715307052-e1.jpg?ts=1712830629848&w=563',
          price: 65.99,
          category: 'Cloth',
          quantity: 24,
          inventoryStatus: 'OUTOFSTOCK',
          rating: 5
        },
        {
          id: '1',
          code: 'f230fh0g3',
          name: 'Polo Punto Cremallera',
          description: 'Buzo polo color azul',
          image: 'https://static.zara.net/assets/public/71a0/aefb/6c8b467a93ab/a5515e39e126/06674405800-e1/06674405800-e1.jpg?ts=1706093248961&w=563',
          price: 65.99,
          category: 'Cloth',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
        },
        {
          id: '2',
          code: 'f230fh0g3',
          name: 'Blazer Traje 100% Lino',
          description: 'Blazer de lino',
          image: 'https://static.zara.net/assets/public/d117/3313/2ecb45af963b/d547afc7a3ab/04307408505-e1/04307408505-e1.jpg?ts=1705504324665&w=288',
          price: 159.00,
          category: 'Cloth',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
        },
        {
          id: '3',
          code: 'f230fh0g3',
          name: 'Camisa 100% Lino',
          description: 'Camiseta de Lino beach',
          image: 'https://static.zara.net/assets/public/f999/362c/f16f4efaa8e6/1c31449eb619/01063406832-e1/01063406832-e1.jpg?ts=1708074154093&w=288',
          price: 49.99,
          category: 'Cloth',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
        },
      ];
      resolve(productos);
    });
  }
}
