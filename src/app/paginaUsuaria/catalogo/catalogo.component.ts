import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprarService } from '../../services/comprar.service';
import { Produto } from '../../Interfaces/Produto.interface';
@Component({
  selector: 'app-catalogo',
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
service = inject(ComprarService)


produtos:Produto[] | null=null

ngOnInit(){
this.adicionar()
}

adicionar(){
  this.service.adicionar().subscribe({
    next:(item:any)=>{
      this.produtos=  item
      console.log(this.produtos)
    },
    error:(error)=>{
      console.log(error)
    }
  })
}

transferir(item: any) {
  this.service.adicionarProduto(item);
  console.log('Produto transferido:', item);

}




}
