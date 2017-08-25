import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

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
  },

  {
    path: 'teams/:id',
    component: TeamDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
