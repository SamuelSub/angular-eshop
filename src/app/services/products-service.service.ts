import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient) {

  }

  cart = [ { title: 'test', body: 'test' } ] ;

  getProducts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  addItemInCart(item: { title: string, body: string }) {
    this.cart.push(item)
  }

  getUsersCart() {
    return this.cart
  }

}
