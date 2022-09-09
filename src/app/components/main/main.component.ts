import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}
  ngOnInit(): void {
  }

}
