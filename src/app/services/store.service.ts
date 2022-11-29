import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../utils/Product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  ArrStore!:Product;
  ArrCart:Product [] = [];
  constructor(
    private http:HttpClient,
  ) {
    this.getAllProducts().subscribe(response =>{
      this.ArrStore = response;
    })


  }

  getAllProducts():Observable<Product> {
    let url = "https://637acfb6702b9830b9f37f16.mockapi.io/api/products";
    return this.http.get<Product>(url);
  }
  getArrStore():Product{
    return this.ArrStore;
  }

}
