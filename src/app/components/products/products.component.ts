import { Component, Input, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../services/products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsServiceService) { }

  allProducts: any;
  singlePageOfProducts: Object[] = [];
  PRODUCTS_PER_PAGE: number = 30;
  currentPage: number = 1;

  ngOnInit(): void {
    let pagesNumber;
    this.productsService.getProducts()
      .subscribe(res => {
        this.allProducts = res;
        pagesNumber = this.findPagesBasedOnProductsLength(this.allProducts);
        this.getProductsForSinglePage(this.allProducts, pagesNumber);
      });
  }

  findPagesBasedOnProductsLength(products: []): number {
    const numberOfPages = Math.floor(products.length / this.PRODUCTS_PER_PAGE)
    return numberOfPages
  }

  getProductsForSinglePage(allProducts: [], numberOfPages: number, currentPage = this.currentPage): void {

    let endingIndex = this.currentPage * this.PRODUCTS_PER_PAGE;
    let startingIndex = endingIndex - this.PRODUCTS_PER_PAGE;
    
    this.singlePageOfProducts = this.allProducts.slice(startingIndex, endingIndex);
  }

  handlePageChange(e: any) {
    const pages = this.findPagesBasedOnProductsLength(this.allProducts);

    if(e.target.textContent === 'Next Page') {
      if(this.currentPage > pages ) return
      this.currentPage += 1
      this.getProductsForSinglePage(this.allProducts, pages)
    }

    if(e.target.textContent === 'Previous Page') {
      if(this.currentPage === 1 ) return
      this.currentPage -= 1
      this.getProductsForSinglePage(this.allProducts, pages)
    }
    console.log(this.currentPage)
  }

}
