// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CategoryComponent } from './category/category.component';
// Servicios
import { MessageService } from 'primeng/api';
// Primeng
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { CompraComponent } from './compra/compra.component';
@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    CompraComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    ButtonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule,
    TagModule,
    CardModule
  ],
  providers: [MessageService]
})
export class FeaturesModule { }
