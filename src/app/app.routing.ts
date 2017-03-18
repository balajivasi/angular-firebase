import { ModuleWithProviders } from '@angular/core';

import { Routes,RouterModule } from '@angular/router'

import { TeluguComponent } from './telugu/telugu.component';
import { HindiComponent } from './hindi/hindi.component';
import { MalayalamComponent } from './malayalam/malayalam.component'


const appRoutes:Routes=[ 
  { path:'telugu', component:TeluguComponent },
  { path:'tamil',loadChildren:`./tamil/tamil.module#TamilModule`},
  { path:'hindi',component:HindiComponent },
  { path:'malayalam',component:MalayalamComponent },
  { path:'**',redirectTo:'telugu',pathMatch:'full'}
]

export const Routing:ModuleWithProviders=RouterModule.forRoot(appRoutes) 