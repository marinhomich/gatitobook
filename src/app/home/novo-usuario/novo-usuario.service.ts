import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';
import { environment } from "../../../environments/environment";

const API = environment.apiURL

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpClient: HttpClient) {}

  cadastraNovoUsuario(NovoUsuario: NovoUsuario) {
    return this.httpClient.post(
      `${API}/user/signup`,
      NovoUsuario
    );
  }

  verificaUsuarioExistente(nomeUsuario: string) {
    return this.httpClient.get(
      `${API}/user/exists/${nomeUsuario}`
    );
  }
}
