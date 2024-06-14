import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { CarroslistComponent } from './components/carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './components/carros/carrosdetails/carrosdetails.component';
import { MarcaslistComponent } from './components/marcas/marcaslist/marcaslist.component';
import { MarcasdetailsComponent } from './components/marcas/marcasdetails/marcasdetails.component';
import { AcessorioslistComponent } from './components/acessorios/acessorioslist/acessorioslist.component';
import { AcessoriosdetailsComponent } from './components/acessorios/acessoriosdetails/acessoriosdetails.component';
import { loginGuard } from './auth/login.guard';

export const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},

  {path: "admin", component: PrincipalComponent, canActivate: [loginGuard], children: [
    {path: "carros", component: CarroslistComponent},
    {path: "carros/new", component: CarrosdetailsComponent },
    {path: "carros/edit/:id", component: CarrosdetailsComponent },
    {path: "acessorios", component: AcessorioslistComponent},
    {path: "acessorios/new", component: AcessoriosdetailsComponent },
    {path: "acessorios/edit/:id", component: AcessoriosdetailsComponent },
    {path: "marcas", component: MarcaslistComponent},
    {path: "marcas/new", component: MarcasdetailsComponent },
    {path: "marcas/edit/:id", component: MarcasdetailsComponent },
  ]}
];
