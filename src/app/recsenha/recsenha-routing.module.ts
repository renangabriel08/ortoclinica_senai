import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecsenhaComponent } from './recsenha.component';

const routes: Routes = [
  {
    path: '',
    component: RecsenhaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecsenhaRoutingModule {}
