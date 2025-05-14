import { Component, inject } from '@angular/core';
import { Produto } from '../../Interfaces/Produto.interface';
import { CommonModule } from '@angular/common';
import { ComprarService } from '../../services/comprar.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carrinho',
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {

  produtosSelecionados:Produto[]=[]
  service = inject(ComprarService)
  router = inject(Router)
  total:number=0

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

  levarTotal(){
this.service.pegarValor(this.getTotal())
this.router.navigate(['/mercado'])
  }
}

