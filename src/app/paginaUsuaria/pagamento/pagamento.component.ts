import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagamento',
  imports: [ReactiveFormsModule],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css'
})
export class PagamentoComponent {

  form = new FormGroup({
    nome: new FormControl(),
    cpf: new FormControl(),
    pagamento: new FormControl(),
    cartao: new FormControl(),
    vencimento: new FormControl(),
    cvv: new FormControl(),
    endereco: new FormControl(),
  })

  mandarInfo(){
    console.log(this.form.value)
  }
  
}
