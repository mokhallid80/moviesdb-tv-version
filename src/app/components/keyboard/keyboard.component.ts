import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  constructor() { }
  @Input() showKeyboard: boolean = false;
  @Output() enterAction: EventEmitter<any> = new EventEmitter();
  @Output() output = new EventEmitter<string>();


  upperCase:boolean = false;
  numbers = ["0","1","2","3","4","5","6","7","8","9"];
  characters = [...Array(26).keys()].map(i => String.fromCharCode(i+97))
  extras = ["!","?",".",","," "];
  rightOptions = ["Clear", "Clear All","Shift", "Enter"];
  allSymbols = [...this.numbers, ...this.characters, ...this.extras];
  

  outputContent:string = "";
  ngOnInit(): void {
    console.log(this.showKeyboard);
  }
  updateOutput() {
    this.output.emit(this.outputContent);
  }
  validClick(event){
    return (event.type === "click" || (event.keyCode && event.keyCode === 13 ));
  }
  handleSymbol(symbol:any){
    if(this.validClick(symbol)){
    
      this.outputContent += symbol.target.id;
      this.output.emit(this.outputContent);
      console.log(this.outputContent);
    } 
  }

  handleOption(option:string, event){

    if(this.validClick(event)){
      if(option === 'Shift'){  
        this.upperCase = !this.upperCase;
        var newChars = [...Array(26).keys()].map(i => (this.upperCase)? String.fromCharCode(i+97).toUpperCase():String.fromCharCode(i+97))
        this.characters = [...newChars];
        this.allSymbols = [...this.numbers, ...this.characters, ...this.extras];
      }
      if(option === 'Clear All'){
        this.outputContent = '';
        this.output.emit(this.outputContent);
      }
      if(option === 'Clear'){
        this.outputContent = this.outputContent.slice(0, -1);
        this.output.emit(this.outputContent);
      }
      if(option === 'Enter'){
        this.output.emit(this.outputContent);
        this.enterAction.emit();
        this.outputContent = '';
        
      }
    }

  }

}
