import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { type } from 'os';
import { ModalWarningComponent } from '../ModalWarning/ModalWarning.component';

@Component({
  selector: 'app-ModalSucces',
  templateUrl: './ModalSucces.component.html',
  styleUrls: ['./ModalSucces.component.scss']
})
export class ModalSuccesComponent implements OnInit {
   @Input() public messages: string;
  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,

  ) {}

  ngOnInit() {}
 
  public closeModal(){
    this.activeModal.close(true);
    // (document.getElementById('modal') as HTMLElement)
  }
  // $( document ){ready(function() {
  //   $('.trigger').on('click', function() {
  //      $('.modal-wrapper').toggleClass('open');
  //     $('.page-wrapper').toggleClass('blur-it');
  //      return false;
  //   });
  // });
  
  
}


export type messages = {
  icon: '' ;
  title: '' ; 
  text: '';
  footer: '';
}


