import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ProductTypes } from 'src/app/pages/product/product.component';
import { InputComponentType } from '../input/input.component';

export type Unity = {
  name: string;
  value: number;
};

export type Checkbox = {
  label: string;
  value: boolean;
};

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: [],
})
export class FormProductComponent implements OnInit {
  unities: Unity[];

  perishableValues: Checkbox[];

  value: string = '';
  @Input() productEdit: ProductTypes | null = null;

  productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    selectedUnity: new FormControl({ name: 'Lt', value: 0 }),
    perishable: new FormControl({ label: 'No', value: false }),
    quantity: new FormControl(''),
    manufacturing: new FormControl(''),
    price: new FormControl(''),
    expiration: new FormControl('', []),
  });

  @Output() sendFormEvent = new EventEmitter<ProductTypes>();

  constructor() {
    this.unities = [
      { name: 'Lt', value: 0 },
      { name: 'Kg', value: 1 },
      { name: 'Un', value: 2 },
    ];

    this.perishableValues = [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ];
  }

  ngOnInit(): void {
    this.productEdit && this.productForm.setValue(this.productEdit);
  }

  onSubmit(): void {
    // console.warn('Your order has been submitted', this.productForm.value);
    // this.productForm.reset();
    const valueForm = this.productForm.value;
    this.sendFormEvent.emit(valueForm);
  }

  inputModelChange(field: InputComponentType) {
    this.productForm.controls[field.name]?.setValue(field.value);
  }

  // validateExpirationDate(): ValidatorFn {
  //   // return { dae: null };
  // }
}
