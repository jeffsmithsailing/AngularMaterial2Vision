import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WizardStepperComponent } from './example/example-component';

// importing our Components
// Library

// Styles


// Guidelines

// Patterns


// UI Elements


const appRoutes: Routes = [
  { path: '', redirectTo: 'example', pathMatch: 'full' },
  { path: 'example', component: WizardStepperComponent },
  // Our Components

  // styles routes


  // guidelines routes


  // patterns routes



  // UI Elements Routes


];

@NgModule({
  	imports: [RouterModule.forRoot(appRoutes)],
 	  exports: [RouterModule],
  	providers: []
})
export class RoutingModule { }
