import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { UsuariosRoute } from '../routes/usuarios.route';
import { IonModal } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  name!: string;

  constructor(
    private storage: Storage,
    private router: Router,
    private usuarioRoute: UsuariosRoute
  ) {  }

    nomeUsuario: string | null = '';
    usuario: any | null = null;
    medicos: any;

    async ngOnInit(): Promise<void> {
      this.usuario = await this.storage.get('usuario');
      this.nomeUsuario = this.usuario['nome'];
      await this.getMedicos();
    }

    async getMedicos(): Promise<void> {
      this.medicos = await this.usuarioRoute.getMedicos();
      this.medicos = this.medicos['resultado'];
      console.log(this.medicos['resultado'])
    }

    async logoff(): Promise<void> {
      await this.storage.remove('usuario');
      await this.storage.remove('senha');
      this.router.navigate(['/login'], { replaceUrl: true});
    }

    cancel() {
      this.modal.dismiss(null, 'cancel');
    }
  
    confirm() {
      this.modal.dismiss(this.name, 'confirm');
    }

}