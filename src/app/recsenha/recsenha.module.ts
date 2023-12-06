import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RecsenhaRoutingModule } from './recsenha-routing.module';
import { RecsenhaComponent } from './recsenha.component';



@NgModule({
  declarations: [RecsenhaComponent],
  imports: [
    CommonModule,
    RecsenhaRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class RecsenhaModule { }
