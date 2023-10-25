import { Component } from "@angular/core";
import { Product } from "../product.model";
import { ProductService } from "../product.service";
import { Subscription } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent {
  products: Product[];
  subscription: Subscription;

  constructor(
    private readonly productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.getProducts();
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
  
  handlerErreur(error: any) {
    if (error instanceof HttpErrorResponse && error.status === 404 && error.statusText==="OK") {
      this.products = [];
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
