import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  BASE_URL = 'http://localhost:8080/sistema-academico/alunos';

  constructor(private _snackBar: MatSnackBar,
              private _httpClient: HttpClient) { }

  openSnackBar = (message: string) => {
    this._snackBar.open(message, 'x', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  getAluno(id: number): Observable<any> {
    return this._httpClient.get(`${this.BASE_URL}/${id}`);
  }

  createAluno(aluno: object): Observable<object> {
    return this._httpClient.post(`${this.BASE_URL}`, aluno);
  }

  updateAluno(id: number, value: any): Observable<object> {
    return this._httpClient.put(`${this.BASE_URL}/${id}`, value);
  }

  deleteAluno(id: number): Observable<any> {
    return this._httpClient.delete(`${this.BASE_URL}/${id}`, { responseType: 'text' });
  }

  getAlunoList(): Observable<any> {
    return this._httpClient.get(`${this.BASE_URL}`);
  }
}
