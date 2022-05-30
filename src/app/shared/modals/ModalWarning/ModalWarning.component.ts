import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSuccesComponent } from '../ModalSucces/ModalSucces.component';

@Component({
  selector: 'app-ModalWarning',
  templateUrl: './ModalWarning.component.html',
  styleUrls: ['./ModalWarning.component.scss']
})
export class ModalWarningComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    
  }
  public closeModal(){
    this.activeModal.close(true);
    // (document.getElementById('modal') as HTMLElement)
  }
  public openAlert() {
    const modalRef = this.modalService.open(ModalSuccesComponent, {size: 'sm'});
    modalRef.componentInstance.outSalida.subscribe(() => {
      modalRef.close();
    });

  }

}
