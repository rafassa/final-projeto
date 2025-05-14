import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../Interfaces/Produto.interface';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComprarService {



 private produtoOrigem = new BehaviorSubject<Produto[]>([])
 produtos = this.produtoOrigem.asObservable();

 private total = new BehaviorSubject<number>(0)

  constructor(private http:HttpClient) { }

  adicionar(){
  const url = "http://localhost:3000/"
    return this.http.get(url)

  }

  adicionarItem(item:any){
    const produtoAtual = this.produtoOrigem.getValue();
    const produtoQuantidade = produtoAtual.findIndex(i => i.nome === item.nome)

    if(produtoQuantidade !==-1){
      const atualizar = [...produtoAtual];
      atualizar[produtoQuantidade].quantidade += 1
      this.produtoOrigem.next(atualizar)
    }else{
      this.produtoOrigem.next([...produtoAtual, {...item, quantidade: 1}])
    }
  }
 

  limparCarrinho(item:any){
      const produtoAtual = this.produtoOrigem.getValue();
      const index = produtoAtual.findIndex(i => i.nome === item.nome);
    
      if (index !== -1) {
        const atualizar = [...produtoAtual];
    
        if (atualizar[index].quantidade > 1) {
         
          atualizar[index].quantidade -= 1;
        } else {
       
          atualizar.splice(index, 1);
        }
    
        this.produtoOrigem.next(atualizar);
      }
  }

 pegarValor(valor:number){
  localStorage.setItem('valor', JSON.stringify(valor))
 }

}
