export default new class Utils {
  secondsToReadable(pSeconds:number){
    let min:string = '00';
    let sec:string = '00';

    min = this.lpad(Math.floor(pSeconds/60) + '',2,'0');
    sec = Math.floor(pSeconds - (60 * parseInt(min))) + '';
    return `${min}:${sec}`;
  }

  lpad(pInputString:string, pLength:number, pStringToPad:string){
    return pInputString.padStart(pLength, pStringToPad);
  }
};
