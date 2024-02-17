import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent},
  { path: 'empresa', component: EmpresaComponent},
  { path: 'productos', component: ProductsComponent},
  { path: 'contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
