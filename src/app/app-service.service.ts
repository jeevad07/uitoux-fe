import { Injectable } from '@angular/core';
import { environment } from './environment';
import { HttpClient } from '@angular/common/http'
import {HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private api =environment.apiUrl;

  constructor(private http:HttpClient) { }

  getProductdata(){
      return this.http.get(this.api+'/product/getAllProducts');
  }

}
