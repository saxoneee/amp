import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './comps/app/app.component';
import { Toolbar } from './comps/toolbar/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventBusService } from './utils/EventBusService';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    Toolbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatRippleModule,
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
