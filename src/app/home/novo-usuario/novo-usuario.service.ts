import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpClient: HttpClient) {}

  cadastraNovoUsuario(NovoUsuario: NovoUsuario) {
    return this.httpClient.post(
      'http://localhost:3000/user/signup',
      NovoUsuario
    );
  }
}
