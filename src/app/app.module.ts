import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { RouterModule,Routes } from '@angular/router'

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2'
import { config } from 'environments/firebaseEnveronment';
import { TeluguComponent } from './telugu/telugu.component';
import { TamilComponent } from './tamil/tamil.component';
import { HindiComponent } from './hindi/hindi.component';
import { MalayalamComponent } from './malayalam/malayalam.component'

import { Routing } from './app.routing'


@NgModule({
  declarations:[ 
    AppComponent,
    TeluguComponent,
    TamilComponent,
    HindiComponent,
    MalayalamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
