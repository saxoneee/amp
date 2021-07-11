import { Component, OnInit } from '@angular/core';
import amplib from 'src/lib/amplib';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'amp';

  ngOnInit(){
    var _me = this;

    amplib.init().then(function(){
      console.log('ready');
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
