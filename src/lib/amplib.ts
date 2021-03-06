export default new class amplib {
  private initialized:boolean = false;
  private player:any = null;

  private newAudioCallback:any = null;

  private data = [
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

  public init(){
    var _me = this;

    console.log('amplib init start');

    _me.player = new Audio();

    return new Promise((resolve:Function, reject:Function) => {
      setTimeout(() => {
        console.log('amplib init done');
        _me.initialized = true;
        resolve();
      }, 1000);
    });
  }

  public getPlayer(){
    var _me = this;

    if(!_me.initialized){
      throw {
        msg: 'amplib is not initialized'
      };
    }

    return _me.player;
  }

  public getList(){
    var _me = this;

    if(!_me.initialized){
      throw {
        msg: 'amplib is not initialized'
      };
    }

    return new Promise((resolve:Function, reject:Function) => {
      setTimeout(() => {
        resolve(_me.data);
      }, 1000);
    });
  }

  public onNewAudio(pCallback:Function){
    var _me = this;

    _me.newAudioCallback = pCallback;
  }

  public play(pSongData:any){
    var _me = this;

    if(!_me.initialized){
      throw {
        msg: 'amplib is not initialized'
      };
    }

    _me.player.pause();

    _me.player.src = pSongData.src;

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

    if(!_me.initialized){
      throw {
        msg: 'amplib is not initialized'
      };
    }

    _me.player.pause();
  }

  public resume(){
    var _me = this;

    if(!_me.initialized){
      throw {
        msg: 'amplib is not initialized'
      };
    }

    _me.player.play();
  }
}
