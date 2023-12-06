import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Storage } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http'
import { UsuariosRoute } from '../routes/usuarios.route';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    IonicModule,
    FormsModule,
    FontAwesomeModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[UsuariosRoute]
})
export class LoginModule { }
