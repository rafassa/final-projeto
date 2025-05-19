import { Component } from '@angular/core';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { CarrinhoComponent } from '../carrinho/carrinho.component';

@Component({
  selector: 'app-home',
  imports: [PesquisaComponent, CatalogoComponent, CarrinhoComponent],
  templateUrl: './mercado.component.html',
  styleUrl: './mercado.component.css'
})
export class HomeComponent {

}
