import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { RouterModule,Routes } from '@angular/router'

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2'
import { config } from 'environments/firebaseEnveronment';
import { TeluguComponent } from './telugu/telugu.component';

import { HindiComponent } from './hindi/hindi.component';
import { MalayalamComponent } from './malayalam/malayalam.component'

import { Routing } from './app.routing'

import { TeluguService } from './telugu/telugu.service';
import { TelugudetailsComponent } from './telugu/telugudetails/telugudetails.component'

@NgModule({
  declarations:[ 
    AppComponent,
    TeluguComponent,
    HindiComponent,
    MalayalamComponent,
    TelugudetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    Routing
  ],
  providers: [TeluguService],
  bootstrap: [AppComponent]
})



export class AppModule { }
