import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreelancersListComponent } from './components/freelancers-list/freelancers-list.component';
import { FreelancerDetailsComponent } from './components/freelancer-details/freelancer-details.component';
import { AddFreelancerComponent } from './components/add-freelancer/add-freelancer.component';

const routes: Routes = [
  { path: '', redirectTo: 'freelancers', pathMatch: 'full' },
  { path: 'freelancers', component: FreelancersListComponent },
  { path: 'freelancers/:id', component: FreelancerDetailsComponent },
  { path: 'add', component: AddFreelancerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
