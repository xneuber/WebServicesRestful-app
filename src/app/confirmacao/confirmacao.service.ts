import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmacaoComponent } from './confirmacao.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmacaoService {

  constructor(private modalService: NgbModal) { }

  public confirma(   
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancelar',
   
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmacaoComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;
  }
}