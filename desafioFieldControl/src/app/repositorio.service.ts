import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { interface_Repositorio } from './interface_Repositorios';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

  constructor(private httpClient: HttpClient){}

  obterTodos(){

    return this.httpClient.get<interface_Repositorio[]>(`${API_PATH}Repositorios`); //.toPromise();
  }
}
