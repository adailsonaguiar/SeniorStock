import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/productService';
import { ProductTypes } from '../product/product.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class ListProductComponent implements OnInit {
  products: ProductTypes[] = [];

  constructor(
    private productService: ProductService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  deleteProduct(id: string) {
    this.confirmationService.confirm({
      message: 'Do you want to remove this product?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.productService.deleteProduct(id, this.products);
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmed',
          detail: 'Product deleted',
        });
      },
      reject: () => {},
    });
  }
}
