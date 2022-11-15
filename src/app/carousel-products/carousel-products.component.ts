import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel-products',
  templateUrl: './carousel-products.component.html',
  styleUrls: ['./carousel-products.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselProductsComponent implements OnInit {
	images = ['assets/images/product1.jpg','assets/images/product2.jpg','assets/images/product3.jpg','assets/images/product4.jpg'];
  constructor(config: NgbCarouselConfig) { 
		config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;


  }

  ngOnInit(): void {
  }

}
