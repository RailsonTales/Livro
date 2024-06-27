import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
  ano: string;
}

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.scss'
})

export class CadastrarComponent {
  
  url = "https://localhost:7208/api/Livro";

  constructor(
    private route: Router,
    private dialog: MatDialog,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { 
  }

  salvar(): void {
    const dialogRef = this.dialog.open(ConfirmacaoComponent, {
      width: '90vw',
      autoFocus: false,
      data: {  }
    });
    dialogRef.afterClosed().subscribe(result => {
    });

    const id = parseInt((<HTMLInputElement>document.getElementById("id")).value);
    const titulo = (<HTMLInputElement>document.getElementById("titulo")).value;
    const autor = (<HTMLInputElement>document.getElementById("autor")).value;
    const genero = (<HTMLInputElement>document.getElementById("genero")).value;
    const ano = (<HTMLInputElement>document.getElementById("ano")).value;
    
    const livro = { id: id, titulo: titulo, autor: autor, genero: genero, ano: ano };

    if(this.myParam == '')
    {
      livro.id = 0;
      this.http.post(this.url, livro).subscribe();
    }
    else
    {    
      this.http.put<Livro>(this.url +"/"+this.myParam, livro)
          .subscribe(data => this.myParam = data.id);
    }
    
    this.route.navigate(['/home']);
  }

  voltar(): void {    
    this.route.navigate(['/home']);
  }

  myParam: any;

  livros = new Array<any>();
  
  ngOnInit(): void 
  {
    this.activatedRoute.params.subscribe((params: Params) => this.myParam = params['id']);

    console.log(this.myParam);
    var id = this.myParam;

    if(id != '')
    {
      this.getLivros(id).subscribe(response => {        
        var dataSource = response;

        (<HTMLInputElement>document.getElementById("id")).value = response.id;
        (<HTMLInputElement>document.getElementById("id")).value = response.id;
        (<HTMLInputElement>document.getElementById("id")).value = response.id;
        (<HTMLInputElement>document.getElementById("titulo")).value = response.titulo;
        (<HTMLInputElement>document.getElementById("autor")).value = response.autor;
        (<HTMLInputElement>document.getElementById("genero")).value = response.genero;
        (<HTMLInputElement>document.getElementById("ano")).value = response.ano;
      });
    }
  }

  public getLivros(id: string): Observable<any> 
  {
    return this.http.get(this.url+"/"+id);
  }

}
