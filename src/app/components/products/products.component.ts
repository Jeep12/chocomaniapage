import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/utils/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!:Product;
  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
    this.storeService.getArrStore().subscribe(e=> {
      this.products = e;
    })
  }


}
