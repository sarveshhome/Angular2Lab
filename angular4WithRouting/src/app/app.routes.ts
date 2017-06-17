import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import {ContactComponent } from './contact/contact.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'contact',
    component: ContactComponent,
  },
  // map '/persons/:id' to person details component
  {
    path: 'about',
    component: AboutComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
