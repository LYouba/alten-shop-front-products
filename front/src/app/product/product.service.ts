import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly URL_API_PRODUCT = "http://localhost:8081/products";
  
  constructor(private readonly http : HttpClient) { 

    /**
     * Utilisation avec le back-end
     */
    // à supprimer ! juste pour les tests: sauvegarder les produits du json en BDD.
        // const produits = this.http.get<{data : Product[]}>('assets/products.json'); 
        // produits.subscribe(value => {
        //   value.data.forEach(produit => this.saveProduct(produit).subscribe());
        // })
      //
  }

  /**
   * Utilisation avec le back-end
   */
  // getProducts() : Observable<Product[]>{
  //   return this.http.get<Product[]>(`${this.URL_API_PRODUCT}`)
  // }

  // saveProduct(product: Product) : Observable<Product>{
  //   return this.http.post<Product>(`${this.URL_API_PRODUCT}`, product)
  // }

  // deleteProduct(id: number) {
  //   return this.http.delete(`${this.URL_API_PRODUCT}/${id}`)
  // }

  // deleteAllProducts(ids: number[]) {  
  //   return this.http.delete(`${this.URL_API_PRODUCT}`, {body: ids})
  // }
  
  
  /**
   * Utilisation avec le fichier Json
   */
  getProducts() : Observable<{ data: Product[]; }>{
    return this.http.get<{data : Product[]}>('assets/products.json')
  }
}
