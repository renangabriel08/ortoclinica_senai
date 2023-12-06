import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root'
})
export class UsuariosRoute {
    constructor(
        private http: HttpClient,
        private storage: Storage
        ) {}

        private apiUrl = 'http://10.91.249.10:3000';

    public async getToken(): Promise<string> {
        const usuario = await this.storage.get('usuario');
        return 'Bearer ' + (usuario ? usuario.token : '');
    }

    public async getHeader(): Promise<{ headers: HttpHeaders }> {
        return {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': await this.getToken()
            })
        };
    }

    public login = async (body: any) => {
        return this.http.post(`${this.apiUrl}/tp01/usuarios/login`, body).toPromise()
        .then(teste => teste)
        .catch(error => error);
    }

    public cadastrar = async (body: any) => {
        return this.http.post(`${this.apiUrl}/tp01/usuarios/cadastro`, body)
        .toPromise()
        .then(teste => teste)
        .catch(error => error);
    }

    public getMedicos = async () => {
        return this.http.get(`${this.apiUrl}/tp04/medicos/`, await this.getHeader()).toPromise()
        .then(resultado => resultado)
        .catch(error => error);
    }
}