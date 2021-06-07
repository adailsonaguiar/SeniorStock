import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { TableDynamicDemoComponent } from './components/table-dynamic-demo/table-dynamic-demo.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { InputComponent } from './components/input/input.component';

import { ProductComponent } from './pages/product/product.component';
import { ListProductComponent } from './pages/list-product/list-product.component';

import { ProductService } from './services/productService';

import { NgxCurrencyModule } from 'ngx-currency';
import { LettersOnlyDirective } from './directives/letters-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableDynamicDemoComponent,
    FormProductComponent,
    SideBarComponent,
    ProductComponent,
    ListProductComponent,
    InputComponent,
    LettersOnlyDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    BreadcrumbModule,
    ButtonModule,
    SidebarModule,
    InputNumberModule,
    SelectButtonModule,
    NgxCurrencyModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  bootstrap: [AppComponent],
  providers: [ProductService],
})
export class AppModule {}
