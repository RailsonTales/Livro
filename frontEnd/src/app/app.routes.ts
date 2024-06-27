import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './home/cadastrar/cadastrar.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'home/cadastrar/:id', component: CadastrarComponent },
  { path: 'about', component: AboutComponent },
];
