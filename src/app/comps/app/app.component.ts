import { Component, OnInit } from '@angular/core';
import amplib from 'src/lib/amplib';
import utils from 'src/app/utils/utils';

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

    amplib.onNewAudio(function(pSongData:any){
      _me.current.title = pSongData.title;
      _me.current.artist = pSongData.artist;
      _me.current.duration = utils.secondsToReadable(pSongData.duration);
    });
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
    title: 'no title',
    artist: 'not artist',
    duration: '00:00'
  };

  getRecord(record:any){
    var _me = this;

    amplib.play(record);
  }

  onPauseClick(){
    console.log('asdsdfg');
    amplib.pause();
  }
}
