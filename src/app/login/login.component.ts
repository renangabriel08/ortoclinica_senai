import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCoffee, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { UsuariosRoute } from '../routes/usuarios.route';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  formularioValido = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private storage: Storage, private usuariosRoute: UsuariosRoute) {
    this.formulario = this.formBuilder.group({
      'email': ['', Validators.required],
      'senha': ['', Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {
    if (await this.storage.get('usuario')) {
      this.router.navigate(['home'], { replaceUrl: true });
    }
  }
  async validarForm() {
    this.formularioValido = this.formulario.valid;
    if (this.formulario.valid) {
      const dados = this.formulario.value;
      await this.login(dados);
    }
  }

  login = async (dados: any): Promise<any> => {
    const response = await this.usuariosRoute.login({
      'email': dados.email,
      'senha': dados.senha
    })
    await this.storage.set('usuario', response);
    if ('token' in await this.storage.get('usuario')) {
      this.router.navigate(['/home'], { replaceUrl: true })
      console.log(await this.storage.get('usuario'));
    }
  }
  
}