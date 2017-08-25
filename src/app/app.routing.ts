import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { AdminComponent } from './admin/admin.component';
import { FrontpageComponent } from './frontpage/frontpage.component';


const appRoutes: Routes = [
  {
    path: '',
    component: FrontpageComponent
  },

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
  },

  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
