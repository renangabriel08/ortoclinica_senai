import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosRoute } from '../routes/usuarios.route';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {

  formulario: FormGroup;
  formularioValido = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private usuariosRoute: UsuariosRoute) {
    this.formulario = this.formBuilder.group({
      'nome': ['', Validators.required],
      'email': ['', Validators.required],
      'data': ['', Validators.required],
      'senha': ['', Validators.required],
      'confirmSenha': ['', Validators.required]
    });
  }

  async validarForm() {
    this.formularioValido = this.formulario.valid;
    if (this.formulario.valid) {
      const dados = this.formulario.value;
      await this.cadastrar(dados);
    }
  }

  cadastrar = async (dados: any): Promise<any> => {
    const response = await this.usuariosRoute.cadastrar({
      'nome': dados.nome,
      'email': dados.email,
      'senha': dados.senha,
      'dt_nascimento': dados.data
    })
    if (response['message'] == 'Usuário Cadastrado com Sucesso!') {
      this.router.navigate(['/login'], { replaceUrl: true })
    }
  }

}