import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Curso } from './curso.model';
import { CursoService } from './curso.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit  {

  cursos: any[] = [];
  curso: Curso = new Curso();

  cursoDataSource: MatTableDataSource<Curso>;
  displayedCursos : String[] = ['idcurso', 'nomecurso',  'update', 'delete'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private cursoService: CursoService, 
              private router: Router) { 
  }

  ngOnInit(): void {
    this.getCursoList();
  }

  getCursoList() {
    this.cursoService.getCursoList()
      .subscribe(
        data => {
          this.cursoDataSource = new MatTableDataSource<Curso>(data);
          this.cursoDataSource.paginator = this.paginator;
          this.cursoDataSource.sort = this.sort;
        },
        error => console.log(error)
      );
  }

  navigateToCursoNovo(){
    this.router.navigate(['/curso-novo']);
  }

  navigateToCursoEditar(curso: Curso){
    this.router.navigate([`/curso-editar/${curso.idcurso}`]);
  }

}
