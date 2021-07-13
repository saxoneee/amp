import { Component, OnInit } from '@angular/core';
import amplib from 'src/lib/amplib';

import { MatTableDataSource } from '@angular/material/table';
import { EventBusService } from 'src/app/utils/EventBusService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'amp';

  constructor(private eventBusService: EventBusService) { }

  ngOnInit(){
    var _me = this;

    amplib.init().then(function(){
      console.log('ready');
      _me.eventBusService.emit('amplib:ready');
      amplib.getList().then(
        function(pData:any){
          _me.dataSource.data = pData;
        }
      );
    });

  }

  public dataSource = new MatTableDataSource<any>();

  getRecord(record:any){
    var _me = this;

    amplib.play(record);
  }
}
