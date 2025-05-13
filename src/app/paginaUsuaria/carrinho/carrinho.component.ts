import { Component, inject } from '@angular/core';
import { Produto } from '../../Interfaces/Produto.interface';
import { CommonModule } from '@angular/common';
import { ComprarService } from '../../services/comprar.service';
@Component({
  selector: 'app-carrinho',
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {

  produtosSelecionados:Produto[]=[]
  service = inject(ComprarService)
ngOnInit(){
  this.produtosSelecionados = this.service.obterProdutos()
  console.log(this.produtosSelecionados)
}

   remover(produto: any) {
    this.service.removerProduto(produto);
  }
}

