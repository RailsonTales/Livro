import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from  '@angular/material/icon';
import { MatCardModule } from  '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LivrosElement {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
  ano: string;
}

const ELEMENT_DATA: LivrosElement[] = [
  {id: 1, titulo: 'HP', autor: 'Rowling', genero: 'ficção', ano: '2001'},
  {id: 2, titulo: 'LOTRO', autor: 'Tolkien', genero: 'aventura', ano: '2002'},
  {id: 3, titulo: 'GOT', autor: 'Martin', genero: 'drama', ano: '2011'},
];

@Component({
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatCardModule],
})
export class HomeComponent {
  
  url = 'https://localhost:7208/api/Livro';

  displayedColumns: string[] = ['id', 'titulo', 'autor', 'genero', 'ano', 'options'];
  
  dataSource = ELEMENT_DATA;

  constructor(
    private route: Router,
    private dialog: MatDialog,
    private http: HttpClient,

  ) { 
    
  }

  public getLivros(): Observable<any> 
  {
    return this.http.get<any>(this.url);
  }

  livros = new Array<any>();

  ngOnInit(): void {
    this.getLivros().subscribe(response => {        
        this.dataSource = response;
    });
  }

  public deleteLivro(id: string): Observable<any> 
  {
    return this.http.delete<any>(this.url+"/"+id);
  }

  btnExcluir(id: string) 
  {
    this.deleteLivro(id).subscribe(response => {        
      this.dataSource = response;
    });
  }

  btnAdd(id: string): void  {
    
    this.route.navigate(['/home/cadastrar', id]);
    
  }
}
