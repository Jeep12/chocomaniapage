import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private httpClient:HttpClient) {

  }

  public getAll(){
    const url = "https://635761e19243cf412f97ac48.mockapi.io/usuarios";
    return this.httpClient.get(url);
  }



}
