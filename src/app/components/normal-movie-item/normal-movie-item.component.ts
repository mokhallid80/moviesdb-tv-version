import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
@Component({
  selector: 'app-normal-movie-item',
  templateUrl: './normal-movie-item.component.html',
  styleUrls: ['./normal-movie-item.component.scss']
})
export class NormalMovieItemComponent implements OnInit {

  @Input() movie:any ={"title":''};
  @ViewChild(DetailsModalComponent) child;
  constructor() { }
  image = "";
  imgExists = false;
  hideImg:boolean = false;
  hideImage() {
    // this.image = "../../../assets/images/eren_kid.png";
    this.hideImg = true;
  }

  handleKey(event){
    if(event.type==='click' || (event.keyCode && event.keyCode === 13)){
      let elem : HTMLElement = document.getElementById("details-btn") as HTMLElement;
      elem.click();
      this.child.open();
    }
  }
  ngOnInit(): void {
    if(this.movie && this.movie.backdrop_path !== null){
      this.imgExists = true;
      this.hideImg = false;
      this.image = "https://image.tmdb.org/t/p/original/"+this.movie.poster_path;
    }
    else{
      this.imgExists = false;
      this.hideImg = false;
    }
  
  }
  

}
