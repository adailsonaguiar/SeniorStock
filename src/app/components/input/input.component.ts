import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

export type InputComponentType = {
  name: string;
  value: string;
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: [],
})
export class InputComponent implements OnInit {
  @Input('type') type = '';
  @Input() name = '';
  @Input() label = '';
  @Input() suffix = '';
  @Input() maxlength = 500;
  @Input() mode = '';
  @Input() invalid = true;
  @Input() value = '';
  @Output() inputModelChange = new EventEmitter<InputComponentType>();

  constructor() {}
  ngOnInit(): void {}
  onChange(): void {
    this.inputModelChange.emit({ value: this.value, name: this.name });
  }
}
