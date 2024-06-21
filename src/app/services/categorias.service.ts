import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { CategoryResponse } from 'src/app/models/responses/category.response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private urlLojaRoupasApi: string = `${environment.config.apis.lojaRoupasApi}`;

  constructor(private http: HttpClient) { }

  listarTodas(): Observable<Array<Categoria>> {
    return this.http.get<Array<CategoryResponse>>(`${this.urlLojaRoupasApi}categories`).pipe(
      map(data => data.map((item) => this.transformarCategoria(item)))
    );
  }

  private transformarCategoria(item: CategoryResponse): Categoria {
    return {
      id: item.id,
      nome: item.name,
      imagem: item.image
    };
  }
}
