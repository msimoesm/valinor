import { Component } from '@angular/core';
import { RepositorioService } from './repositorio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafioFieldControl';

  constructor(private repositorioService: RepositorioService){}
  
  obterTodosRepositorios(){

    this.obterTodosRepositorios()
     //.then(repositorios => console.log(repositorios))
    //.catch(error => console.log(error));

  }

}
