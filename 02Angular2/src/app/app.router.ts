import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import {ContactComponent} from './contact/contact.component';

export const router: Routes = [{path: '', component: AppComponent, pathMatch: 'full' },
     {path: 'about', component: AboutComponent },
     {path: 'contact',component:ContactComponent},
     {path: 'services', component: ServicesComponent }];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
