import { Component } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-offcanvas-carrinho',
  templateUrl: './offcanvas-carrinho.component.html',
  styleUrls: ['./offcanvas-carrinho.component.css']
})
export class OffcanvasCarrinhoComponent {
  constructor(public carrinhoService: CarrinhoService, public activeOffcanvas: NgbActiveOffcanvas) { }

  fechar() {
    this.activeOffcanvas.dismiss();
  }

  getTotal(): number {
    return this.carrinhoService.getTotal();
  }
}
