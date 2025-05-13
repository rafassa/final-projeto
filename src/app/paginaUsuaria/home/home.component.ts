import { Component } from '@angular/core';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { CarrinhoComponent } from '../carrinho/carrinho.component';

@Component({
  selector: 'app-home',
  imports: [PesquisaComponent, CatalogoComponent, CarrinhoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
