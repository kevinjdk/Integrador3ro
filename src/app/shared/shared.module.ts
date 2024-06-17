//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { FooterComponent } from './components/footer/footer.component';
// Primeng
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule
  ],
  exports: [
    FooterComponent
  ]
})
export class SharedModule { }
