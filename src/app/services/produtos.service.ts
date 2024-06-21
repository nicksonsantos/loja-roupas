import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, map } from "rxjs";
import { Produto } from 'src/app/models/produto';
import { ProductResponse } from "src/app/models/responses/product.response";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private urlLojaRoupasApi: string = `${environment.config.apis.lojaRoupasApi}`;

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Array<Produto>> {
    return this.http.get<Array<ProductResponse>>(`${this.urlLojaRoupasApi}products`).pipe(
      map(data => data.map((item) => this.transformarProduto(item)))
    );
  }

  listarPorCategoria(idCategoria: number): Observable<Array<Produto>> {
    return this.http.get<Array<ProductResponse>>(
      `${this.urlLojaRoupasApi}products/?categoryId=${idCategoria}`
    ).pipe(
      map(data => data.map((item) => this.transformarProduto(item)))
    );
  }

  private transformarProduto(item: ProductResponse): Produto {
    return {
      id: item.id,
      titulo: item.title,
      preco: item.price,
      descricao: item.description,
      categoria: {
        id: item.category.id,
        nome: item.category.name,
        imagem: item.category.image
      },
      imagens: item.images
    };
  }
}
