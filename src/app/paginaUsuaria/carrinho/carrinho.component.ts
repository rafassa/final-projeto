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
    this.service.produtos.subscribe(produtos =>{
      this.produtosSelecionados = produtos
    })
  }

  removerItem(produto:any){
    this.service.limparCarrinho(produto)
  }


  getTotal(): number {
    return this.produtosSelecionados.reduce((total, item) => {
      return total + (item.preco * item.quantidade);
    }, 0);
  }
}

