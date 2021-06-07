import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import {
  Checkbox,
  Unity,
} from 'src/app/components/form-product/form-product.component';
import { ProductService } from 'src/app/services/productService';

export type ProductTypes = {
  id?: string;
  name: string;
  selectedUnity: Unity;
  perishable: Checkbox;
  quantity: string;
  manufacturing: string;
  price: string;
  expiration?: string;
};

export type MenuItem = {
  label: string;
  routerLink: string;
};

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [MessageService],
})
export class ProductComponent implements OnInit {
  productEdit: ProductTypes | null = null;
  items: MenuItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.items = [
      { label: 'Products', routerLink: '/test' },
      { label: 'Form', routerLink: '/product' },
    ];

    const id = this.route.snapshot.paramMap.get('id');
    this.productEdit = this.productService.getProductById(id);
  }

  saveProduct(product: ProductTypes) {
    this.productService.saveProduct(product);
    this.messageService.add({
      severity: 'success',
      summary: 'Ok',
      detail: 'Product registered',
    });
  }
}
