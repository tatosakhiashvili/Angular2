import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TreeComponent } from './tree/tree.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tree', component: HomeComponent }
];