import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'proyectoPersonal';
  navItems: MenuItem[] = [];
  ngOnInit(){
    this.navItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/home']
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-tags',
        routerLink: ['/productos']
      },
      {
        label: 'Categorías',
        icon: 'pi pi-fw pi-th-large',
        routerLink: ['/categorias']
      },
      {
        label: 'Carrito de Compras',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: ['/carrito']
      },
      {
        label: 'Perfil',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Login',
            icon: 'pi pi-fw pi-sign-in',
            routerLink: ['/login']
          },
          {
            label: 'Register',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: ['/register']
          }
        ]
      }

    ];
  }
}
