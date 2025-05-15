import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagamento',
  imports: [ReactiveFormsModule],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css'
})
export class PagamentoComponent {

  form = new FormGroup({
    nome: new FormControl([Validators.required, Validators.minLength(15), Validators.maxLength(50)]),
    cpf: new FormControl([Validators.required , Validators.minLength(15), Validators.maxLength(50)]),
    pagamento: new FormControl([Validators.required , Validators.minLength(15), Validators.maxLength(50)]),
    cartao: new FormControl([Validators.required , Validators.minLength(15), Validators.maxLength(50)]),
    vencimento: new FormControl([Validators.required , Validators.minLength(15), Validators.maxLength(50)]),
    cvv: new FormControl([Validators.required , Validators.minLength(15), Validators.maxLength(50)]),
    endereco: new FormControl([Validators.required , Validators.minLength(15), Validators.maxLength(50)]),
  })

  mandarInfo(){
    console.log(this.form.value)
  }
  
}
