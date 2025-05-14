import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mercado } from '../Interfaces/Mercado.interface';
@Injectable({
  providedIn: 'root'
})
export class MercadosService {

 http = inject(HttpClient)
 private total: number = 0;
 getMercados(): Observable<Mercado[]> {
  return this.http.get<Mercado[]>('http://localhost:3000/mercados');
}

setTotal(valor: number) {
  this.total = valor;
}

getTotal(): number {
  return this.total;
}

}
