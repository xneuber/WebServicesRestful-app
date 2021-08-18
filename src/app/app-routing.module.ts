import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CursosComponent } from './curso/cursos.component';
import { CursoNovoComponent } from './curso/curso-novo.component';
import { CursoEditarComponent } from './curso/curso-editar.component';
import { AlunosComponent } from './aluno/alunos.component';
import { AlunoEditarComponent } from './aluno/aluno-editar.component';
import { AlunoNovoComponent } from './aluno/aluno-novo.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent
  },
  {
    path: 'cursos',
    component: CursosComponent
  },
  {
    path: 'curso-novo',
    component: CursoNovoComponent
  },
  {
    path: 'alunos',
    component: AlunosComponent
  },
  {
    path: 'aluno-editar/:id',
    component: AlunoEditarComponent,
    pathMatch: 'full'
  },
  {
    path: 'aluno-novo',
    component: AlunoNovoComponent
  },
  {
    path: 'curso-editar/:id',
    component: CursoEditarComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
