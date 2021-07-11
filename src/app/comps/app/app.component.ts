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

  public current = {
    title: '',
    artist: '',
  };

  getRecord(record:any){
    var _me = this;

    _me.current.title = record.title;
    _me.current.artist = record.artist;
    amplib.play(record);
  }

  onPauseClick(){
    console.log('asdsdfg');
    amplib.pause();
  }
}
