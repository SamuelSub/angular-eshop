import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private productsService: ProductsServiceService) { }

  ngOnInit(): void {
  }

  logCartItems() {
    console.log(this.productsService.getUsersCart())
  }

}
