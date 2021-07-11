import { Component, OnInit } from '@angular/core';
import amplib from 'src/lib/amplib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'amp';

  ngOnInit(){
    var _me = this;

    amplib.init();
  }

  public dataSource = [
    {
      title: 'fantastisch',
      artist: 'Gasmac Gilmore',
      src: './.assets/fantastisch.mp3'
    },
    {
      title: 'dann ohne mich',
      artist: 'Donots',
      src: './.assets/dannohnemich.mp3'
    },
    {
      title: 'Auf die Liebe',
      artist: 'die Apokalyptischen Reiter',
      src: './.assets/aufdieliebe.mp3'
    },
  ];



  getRecord(record:any){
    var _me = this;

    amplib.play(record);
  }
}
