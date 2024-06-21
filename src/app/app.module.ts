import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './components/barra-navegacao/barra-navegacao.component';
import { BarraLateralCategoriasComponent } from './components/barra-lateral-categorias/barra-lateral-categorias.component';
import { OffcanvasCarrinhoComponent } from './components/offcanvas-carrinho/offcanvas-carrinho.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    BarraLateralCategoriasComponent,
    OffcanvasCarrinhoComponent,
    ListaProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
