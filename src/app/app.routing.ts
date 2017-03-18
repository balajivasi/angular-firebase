import { ModuleWithProviders } from '@angular/core';

import { Routes,RouterModule } from '@angular/router'

import { TeluguComponent } from './telugu/telugu.component';
import { TamilComponent } from './tamil/tamil.component';
import { HindiComponent } from './hindi/hindi.component';
import { MalayalamComponent } from './malayalam/malayalam.component'


const appRoutes:Routes=[ 
  { path:'telugu', component:TeluguComponent },
  { path:'tamil',component:TamilComponent },
  { path:'hindi',component:HindiComponent },
  { path:'malayalam',component:MalayalamComponent },
  { path:'**',redirectTo:'telugu',pathMatch:'full'}
]

export const Routing:ModuleWithProviders=RouterModule.forRoot(appRoutes) 