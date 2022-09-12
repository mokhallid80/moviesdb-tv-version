import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moviesDB';
  charArray = this.title.toUpperCase().split("");
  loading: boolean = true;
  playAudio(){
    let audio = new Audio();
    audio.src = "../assets/audio/loading.wav";
    audio.load();
    audio.play();
  }

  ngOnInit() {
    this.playAudio();
    setTimeout(()=>{                           // <<<---using ()=> syntax
     this.loading = false;
  }, 5000);
  }
}
