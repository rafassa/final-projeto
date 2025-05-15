  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Produto } from '../Interfaces/Produto.interface';
  import { BehaviorSubject, Observable } from 'rxjs';
  @Injectable({
    providedIn: 'root'
  })
  export class ComprarService {

ngOnInit(produto:Produto){

}
    constructor(private http:HttpClient) { }

    adicionar(){
    const url = "http://localhost:3000/"
      return this.http.get(url)

    }

    PegarLocalInfo(produto: Produto) {
      
      const valor = localStorage.getItem("produto");
      let produtos: Produto[] = valor ? JSON.parse(valor) : [];   

      if (!Array.isArray(produtos)) {
        produtos = [];
      }    
   const produtoExistente = produtos.find(p => p.nome === produto.nome);
      if (produtoExistente) {
        produtoExistente.quantidade += 1; 
      } else {
        produtos.push({...produto, quantidade: produto.quantidade || 1}); 
      }
      localStorage.setItem("produto", JSON.stringify(produtos));
    }


    removerProduto(produto:Produto){
     
    }


  aumentarQuantidade(produto:Produto){
    produto.quantidade++
    this.pegarValor
  }
  pegarValor(valor:number){
    localStorage.setItem('valor', JSON.stringify(valor))
  }

  }
