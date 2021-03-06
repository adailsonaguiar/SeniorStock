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
    quantity: new FormControl('', [Validators.required]),
    manufacturing: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0.01)]),
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
    this.setValidators();
  }

  setValidators() {
    const expiration = this.productForm.get('expiration');
    const manufacturing = this.productForm.get('manufacturing');

    this.productForm.get('perishable')?.valueChanges.subscribe((perishable) => {
      if (perishable.value) expiration?.setValidators([Validators.required]);
      else expiration?.setValidators(null);

      expiration?.updateValueAndValidity();
    });

    expiration?.valueChanges.subscribe((date) => {
      const dateExpiration = new Date(date);
      if (dateExpiration < new Date())
        expiration?.setErrors({ label: 'This product is expired' });
      if (dateExpiration < new Date(manufacturing?.value))
        expiration?.setErrors({
          label: 'Expiration date cannot be greater than manufacturing date',
        });
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) this.sendFormEvent.emit(this.productForm.value);
    else this.productForm.controls.name.updateValueAndValidity();
  }

  inputModelChange(field: InputComponentType) {
    this.productForm.controls[field.name]?.setValue(field.value);
  }

  // validateExpirationDate(): ValidatorFn {
  //   // return { dae: null };
  // }
}
