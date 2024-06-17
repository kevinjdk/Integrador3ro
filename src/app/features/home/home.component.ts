import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  images: any[];
  responsiveOptions: any[];
  constructor() { 
    this.images = [
      { itemImageSrc: './assets/images/h_uno.jpeg', alt: 'img 1', title: 'Title 1' },
      { itemImageSrc: './assets/images/h_tres.jpg', alt: 'img 2', title: 'Title 2' },
      { itemImageSrc: './assets/images/h_cuatro.jpg', alt: 'img 2', title: 'Title 2' },
      { itemImageSrc: './assets/images/h_cinco.jpg', alt: 'img 2', title: 'Title 2' },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }

  ngOnInit(): void {
  }
}
