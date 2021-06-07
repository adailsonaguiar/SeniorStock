import { Injectable } from '@angular/core';
import { ProductTypes } from '../pages/product/product.component';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class ProductService {
  constructor(private localStorageService: LocalStorageService) {}

  generateId() {
    let text = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  saveProduct(product: ProductTypes) {
    const products = this.localStorageService.get('products') || [];
    if (product.id) {
      const productsNew = this.deleteProduct(product.id, products);
      this.localStorageService.set('products', [...productsNew, product]);
    } else {
      const id = this.generateId();
      this.localStorageService.set('products', [
        ...products,
        { ...product, id },
      ]);
    }
  }

  initListProducts(products: ProductTypes[]) {
    this.localStorageService.set('products', products);
  }

  getProducts() {
    return this.localStorageService.get('products') || [];
  }

  getProductById(id: string | null) {
    if (id) {
      const products = this.getProducts();
      return products.filter((product: ProductTypes) => product.id === id)[0];
    }
  }

  deleteProduct(id: string, products: ProductTypes[]) {
    const newList = products.filter((product) => product.id !== id);
    this.localStorageService.set('products', newList);
    return newList;
  }

  searchProducts(searchField: string) {
    const products = this.getProducts();
    return products.filter((product: ProductTypes) =>
      product.name.includes(searchField)
    );
  }
}
