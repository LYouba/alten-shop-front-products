import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'app/shared/shared.module';
import { ProductsAdminComponent } from './products-admin/products-admin.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductsAdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductModule { }
