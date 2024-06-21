import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent {
  produtos: Array<Produto> = [];

  constructor(private carrinhoService: CarrinhoService, private produtoService: ProdutosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: any) => {
        console.log('params', params);
        if (params.categoria && params.categoria !== 0) {
          this.produtoService.listarPorCategoria(params.categoria).subscribe((produtos: Array<Produto>) => {
            this.produtos = produtos;
          });
        } else {
          this.produtoService.listarTodos().subscribe((produtos: Array<Produto>) => {
            this.produtos = produtos;
          });
        }
      }
      );

  }

  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
}
