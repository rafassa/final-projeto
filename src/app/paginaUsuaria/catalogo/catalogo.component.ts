import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprarService } from '../../services/comprar.service';
import { Produto } from '../../Interfaces/Produto.interface';
import { PesquisaService } from '../../services/pesquisa.service';
import { PesquisaPipePipe } from '../../pipes/pesquisa-pipe.pipe';
@Component({
  selector: 'app-catalogo',
  imports: [CommonModule, PesquisaPipePipe],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
service = inject(ComprarService)
servicePesquisa = inject(PesquisaService)

produtos:Produto[] | null=null
valorPesquisa:string =''
ngOnInit(){

this.adicionar()
this.servicePesquisa.pesquisaObservable.subscribe((pesquisa)=>{
this.valorPesquisa = pesquisa
})
}

adicionar(){
  this.service.adicionar().subscribe({
    next:(item:any)=>{
      
      this.produtos = item
    
    },
    error:(error)=>{
      console.log(error)
    }
  })
}

enviarProduto(produto:Produto){
this.service.PegarLocalInfo(produto)
console.log(produto)
}

}
