export default new class amplib {
  private player:any = null;

  private newAudioCallback:any = null;

  public init(){
    var _me = this;

    console.log('amplib init');
  }

  public onNewAudio(pCallback:Function){
    var _me = this;

    _me.newAudioCallback = pCallback;
  }

  public play(pSongData:any){
    var _me = this;

    if(_me.player){
      _me.player.pause();
    }

    _me.player = new Audio(pSongData.src);

    _me.player.onloadedmetadata = function() {
      if(_me.newAudioCallback){
        _me.newAudioCallback({
          title: pSongData.title,
          artist: pSongData.artist,
          duration: _me.player.duration
        });
      }
    };

    _me.player.play();
  }

  public pause(){
    var _me = this;

    if(!_me.player){
      return;
    }

    _me.player.pause();
  }

  public resume(){
    var _me = this;

    if(!_me.player){
      return;
    }

    _me.player.play();
  }
}
