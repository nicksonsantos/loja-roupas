import { Component } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { OffcanvasCarrinhoComponent } from 'src/app/components/offcanvas-carrinho/offcanvas-carrinho.component';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent {
  constructor(private offcanvasService: NgbOffcanvas, public carrinhoService: CarrinhoService) {}

  abrirOffcanvasCarrinho() {
    this.offcanvasService.open(OffcanvasCarrinhoComponent, { position: 'end' });
  }
}
