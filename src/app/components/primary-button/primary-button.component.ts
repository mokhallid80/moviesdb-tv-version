import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {

  constructor() { }
  @Input() text: string = "Empty";
  @Input() focusable: string = "false";
  @Input() checked: boolean = false;
  @Output() btnAction: EventEmitter<any> = new EventEmitter();

  focusableClass: boolean = false;
  ngOnInit(): void {
    if(this.focusable && this.focusable==="true")
      this.focusableClass = true;
    else
      this.focusableClass = false;
    }
  onClick(){
    this.btnAction.emit();
  }

}
