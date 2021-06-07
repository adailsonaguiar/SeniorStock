import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDynamicDemoComponent } from './table-dynamic-demo.component';

describe('TableDynamicDemoComponent', () => {
  let component: TableDynamicDemoComponent;
  let fixture: ComponentFixture<TableDynamicDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDynamicDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDynamicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
