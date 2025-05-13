import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../Interfaces/Produto.interface';
@Injectable({
  providedIn: 'root'
})
export class ComprarService {


 private produtosSelecionados: Produto[] = [];

  constructor(private http:HttpClient) { }

  adicionar(){
  const url = "http://localhost:3000/"
    return this.http.get(url)

  }

 adicionarProduto(produto: any) {
  const existe = this.produtosSelecionados.find(p => p.nome === produto.nome)
    if(existe){
      existe.quantidade++
    }
    else{
   this.produtosSelecionados.push({ ...produto, quantidade: 1 }); 
    }
  }


  removerProduto(produto: any) {
  const index = this.produtosSelecionados.findIndex(p => p.nome === produto.nome);
    this.produtosSelecionados[index].quantidade > 1 
      ? this.produtosSelecionados[index].quantidade-- 
      : this.produtosSelecionados.splice(index, 1);
  
}
  obterProdutos() {
    return this.produtosSelecionados;
  }


 getTotal(): number {
  return this.produtosSelecionados.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
}

}
