import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
  },
  {
  path: 'cadastro',
  loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroModule)
  },
  {
    path: 'esqsenha',
  loadChildren: () => import('./esqsenha/esqsenha.module').then( m => m.EsqsenhaModule)
  },
  {
    path: 'recsenha',
  loadChildren: () => import('./recsenha/recsenha.module').then( m => m.RecsenhaModule)
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
