import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFreelancerComponent } from './components/add-freelancer/add-freelancer.component';
import { FreelancerDetailsComponent } from './components/freelancer-details/freelancer-details.component';
import { FreelancersListComponent } from './components/freelancers-list/freelancers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFreelancerComponent,
    FreelancerDetailsComponent,
    FreelancersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
