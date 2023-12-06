import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsqsenhaRoutingModule } from './esqsenha-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EsqsenhaComponent } from './esqsenha.component';



@NgModule({
  declarations: [EsqsenhaComponent],
  imports: [
    CommonModule,
    EsqsenhaRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class EsqsenhaModule { }
