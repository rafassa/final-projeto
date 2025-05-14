import { Routes } from '@angular/router';
import { HomeComponent } from './paginaUsuaria/home/home.component';
import { MercadosComponent } from './paginaUsuaria/mercados/mercados.component';
import { PagamentoComponent } from './paginaUsuaria/pagamento/pagamento.component';

export const routes: Routes = [


    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'mercado',
        component:MercadosComponent
    },
    {
        path:'pagamento',
        component:PagamentoComponent
    }
];
