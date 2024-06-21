import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-barra-lateral-categorias',
  templateUrl: './barra-lateral-categorias.component.html',
  styleUrls: ['./barra-lateral-categorias.component.css']
})
export class BarraLateralCategoriasComponent implements OnInit {
  categorias: Array<Categoria> = [];

  constructor(private categoriasService: CategoriasService, private router: Router) { }

  ngOnInit(): void {
    this.categoriasService.listarTodas().subscribe(response => this.categorias = response);
  }

  filtrar(idCategoria: number) {
    this.router.navigate(
      [''],
      { queryParams: { categoria: idCategoria } }
    );
  }
}
