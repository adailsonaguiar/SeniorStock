import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductTypes } from 'src/app/pages/product/product.component';

@Component({
  selector: 'app-table-dynamic-demo',
  templateUrl: './table-dynamic-demo.component.html',
  styleUrls: ['./table-dynamic-demo.component.scss'],
})
export class TableDynamicDemoComponent implements OnInit {
  @Input() products: ProductTypes[] = [];
  @Output() deleteProduct = new EventEmitter<string>();
  @Output() searchProducts = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  delete(id: string | undefined) {
    this.deleteProduct.emit(id);
  }

  searchTable(searchField: any) {
    this.searchProducts.emit(searchField.target.value);
  }
}
