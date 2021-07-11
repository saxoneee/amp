import { Component, OnInit } from '@angular/core';
import amplib from 'src/lib/amplib';
import utils from 'src/app/utils/utils';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss']
})
export class Toolbar implements OnInit {

  public current = {
    title: 'no title',
    artist: 'not artist',
    duration: '00:00'
  };

  ngOnInit(){
    var _me = this;

   console.log('toolbar init');

   amplib.onNewAudio(function(pSongData:any){
    _me.current.title = pSongData.title;
    _me.current.artist = pSongData.artist;
    _me.current.duration = utils.secondsToReadable(pSongData.duration);
  });
  }


  onPauseClick(){
    amplib.pause();
  }

  onResumeClick(){
    amplib.resume();
  }
}
