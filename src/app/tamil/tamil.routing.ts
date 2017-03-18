import { ModuleWithProviders } from '@angular/core'
import { Routes,RouterModule } from '@angular/router'

import { TamilComponent } from './tamil.component'

const routes:Routes=[
	{path:'',component:TamilComponent,pathMatch:'full'}
]

export const routing:ModuleWithProviders=RouterModule.forChild(routes)