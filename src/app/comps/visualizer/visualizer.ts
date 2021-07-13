import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/utils/EventBusService';
import amplib from 'src/lib/amplib';
import utils from 'src/app/utils/utils';

@Component({
  selector: 'visualizer',
  template: `<canvas></canvas>`,
  styles: ['canvas{box-shadow:0 0 2px red}']

})
export class Visualizer implements OnInit {

  constructor(private eventBusService: EventBusService) { }

  ngOnInit(){
    var _me = this;

   console.log('visualizer init');

   _me.eventBusService.on('amplib:ready', function(){
     console.log(amplib.getPlayer());
   });

  //  console.log(amplib.getPlayer());

  }

}
