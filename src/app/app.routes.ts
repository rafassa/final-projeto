import { Routes } from '@angular/router';
import { HomeComponent } from './paginaUsuaria/home/home.component';
import { MercadosComponent } from './paginaUsuaria/mercados/mercados.component';
import { BoletoComponent } from './paginaUsuaria/boleto/boleto.component';
import { CompraComponent } from './paginaUsuaria/compra/compra.component';

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
        path:'compra',
        component:CompraComponent
    },
    {
        path:'boleto',
        component:BoletoComponent
    }
];
