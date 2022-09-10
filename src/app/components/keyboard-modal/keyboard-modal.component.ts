import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { MovieModalViewComponent } from 'src/app/components/movie-modal-view/movie-modal-view.component';
import { KeyboardComponent } from '../keyboard/keyboard.component';

@Component({
  selector: 'app-keyboard-modal',
  templateUrl: './keyboard-modal.component.html',
  styleUrls: ['./keyboard-modal.component.scss']
})
export class KeyboardModalComponent {
  constructor(private modalService: NgbModal) {}


  ngOnInit(){

  }
  open() {
    const modalRef = this.modalService.open(KeyboardComponent,{backdropClass:"backdrop"});
    modalRef.componentInstance.name = 'Keyboard Modal';    
  }
}