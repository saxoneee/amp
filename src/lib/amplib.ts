export default new class amplib {
  private player:any = null;

  public init(){
    var _me = this;



    console.log('amplib init');
  }

  public play(pSongData:any){
    var _me = this;

    _me.player = new Audio(pSongData.src);

    _me.player.play();
  }

  public pause(){
    var _me = this;

    if(!_me.player){
      return;
    }

    _me.player.pause();
  }
}
