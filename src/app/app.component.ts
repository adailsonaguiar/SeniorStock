import { Component } from '@angular/core';
import { ProductService } from './services/productService';
import mockProducts from '../assets/mock';
import { ProductTypes } from './pages/product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private productService: ProductService) {}
  ngOnInit() {
    const products: ProductTypes[] = mockProducts
    this.productService.initListProducts(products);
  }
}
