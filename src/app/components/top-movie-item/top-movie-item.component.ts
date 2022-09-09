import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'; 
import { DetailsModalComponent } from '../details-modal/details-modal.component';
@Component({
  selector: 'app-top-movie-item',
  templateUrl: './top-movie-item.component.html',
  styleUrls: ['./top-movie-item.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
    ]),
  ],

})
export class TopMovieItemComponent implements OnInit {

  @Input() movie:any ={};
  @Input() rank:any;
  @ViewChild(DetailsModalComponent) child;
  popularMovie = {};
  image = "";
 
  constructor() { }
  hideImg:boolean =false;
  hideImage() {
    // this.image = "../../../assets/images/eren_kid.png";
    this.hideImg = true;
  }
  handleKey(event){
    if(event.keyCode === 13){
      let elem : HTMLElement = document.getElementById("details-btn") as HTMLElement;
      elem.click();
      this.child.open();

    }
      
  }
  ngOnInit(): void {

    this.popularMovie = this.movie;
    if(this.movie !== null){
      this.image = "https://image.tmdb.org/t/p/original/"+this.movie.backdrop_path;
      this.hideImg = false;
    }

  
  }


}
