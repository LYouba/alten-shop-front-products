import { Component, OnInit } from "@angular/core";
import { ColumnOptions } from "app/shared/utils/crud-item-options/column-options.model";
import { ControlType } from "app/shared/utils/crud-item-options/control-type.model";
import { CrudItemOptions } from "app/shared/utils/crud-item-options/crud-item-options.model";
import { Subscription } from "rxjs";
import { Product, ARRAY_PRODUCT_KEYS } from "../product.model";
import { ProductService } from "../product.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-products-admin",
  templateUrl: "./products-admin.component.html",
  styleUrls: ["./products-admin.component.scss"],
})
export class ProductsAdminComponent implements OnInit {
  products: Product[];
  config: CrudItemOptions[];
  subscription: Subscription;

  entity = Product;

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.buildConfig();
    this.getProducts();
  }

  buildConfig(): void {
    this.config = ARRAY_PRODUCT_KEYS.map((key) => {
      const columnOptions: ColumnOptions = {};
      if (key === "id") {
        columnOptions.hidden = true;
      }

      if (key === "code" || key === "name") {
        columnOptions.default = true;
      } else columnOptions.default = false;

      return {
        key: key,
        label: key,
        controlType: ControlType.INPUT,
        type: "text",
        columnOptions: columnOptions,
      };
    });
  }

  /**
   * Utilisation avec le fichier Json
   */
  getProducts(): void {
    this.subscription = this.productService.getProducts().subscribe({
      next: (value) => this.products = value.data,
    });
  }

  /**
   * Utilisation avec le back-end
   */
  // getProducts(): void {
  //   this.subscription = this.productService.getProducts().subscribe({
  //     next: (value) => this.products = value,
  //     error: (error) => this.handlerErreur(error)
  //   });
  // }

  saveProduct(product: Product) {
  //   this.productService.saveProduct(product).subscribe({
  //     next: (_) => this.getProducts(),
  //   });
  }

  deleteProduct(ids: number[]) {
  //   if (ids.length === 1)
  //     this.productService.deleteProduct(ids[0]).subscribe({
  //       next: (_) => this.getProducts(),
  //     });
  //   else
  //     this.productService.deleteAllProducts(ids).subscribe({
  //       next: (_) => this.getProducts(),
  //     });
  }

  // handlerErreur(error: any) {
  //   if (error instanceof HttpErrorResponse && error.status === 404 && error.statusText==="OK") {
  //     this.products = [];
  //   }
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
