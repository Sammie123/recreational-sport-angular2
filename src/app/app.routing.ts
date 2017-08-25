import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'listing',
    component: ListingComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
