import { Injectable } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itensCarrinho: Array<Produto> = [];

  constructor() { }

  adicionarAoCarrinho(produto: Produto) {
    this.itensCarrinho.push(produto);
  }

  getItens(): Array<Produto> {
    return this.itensCarrinho;
  }

  getTotal(): number {
    return this.itensCarrinho.reduce((total: number, produto: Produto) => total + produto.preco, 0);
  }
}
