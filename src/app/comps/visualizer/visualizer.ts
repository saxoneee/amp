import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventBusService } from 'src/app/utils/EventBusService';
import amplib from 'src/lib/amplib';
import utils from 'src/app/utils/utils';

@Component({
  selector: 'visualizer',
  template: `<canvas height="500" #canvas></canvas>`,
  styles: ['canvas{box-shadow:0 0 2px red}']

})
export class Visualizer implements OnInit {
  @ViewChild('canvas') canvas!: ElementRef;

  visualizerInit:boolean = false;

  constructor(private eventBusService: EventBusService) { }

  ngAfterViewInit(){
    var _me = this;
    console.log('visualizer view init', _me.canvas);
  }
  ngOnInit(){
    var _me = this;

    _me.eventBusService.on('amplib:play', function(){
      var _audio = amplib.getPlayer(),
       audioCtx = new AudioContext(),
       analyser = audioCtx.createAnalyser();

      if(!_me.visualizerInit){
        analyser.fftSize = 2048;
        let source = audioCtx.createMediaElementSource(_audio);

        source.connect(analyser);
        source.connect(audioCtx.destination);

        _me.visualizerInit = true;
      }

     let data = new Uint8Array(analyser.frequencyBinCount);

     var loopingFunction = function(){
      requestAnimationFrame(loopingFunction);
      analyser.getByteFrequencyData(data);
      draw(data);
    }
     requestAnimationFrame(loopingFunction);

    });

    var draw = function(pData:any){
      pData = [...pData];
      var canvas = _me.canvas.nativeElement,
      ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,canvas.width,canvas.height);
      let space = canvas.width / pData.length;
      pData.forEach((value:any,i:any)=>{
          ctx.beginPath();
          ctx.moveTo(space*i,canvas.height); //x,y
          ctx.lineTo(space*i,canvas.height-value); //x,y
          ctx.stroke();
      })
     }



   //  console.log(amplib.getPlayer());


  }

}
