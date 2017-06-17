import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from '../app/about/about.component';
import { ContactComponent} from './contact/contact.component';
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'Contact', component: ContactComponent }
];
export const routing  = RouterModule.forChild(routes);
