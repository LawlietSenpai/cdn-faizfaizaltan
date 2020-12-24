import { Component, OnInit } from '@angular/core';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-freelancers-list',
  templateUrl: './freelancers-list.component.html',
  styleUrls: ['./freelancers-list.component.css']
})
export class FreelancersListComponent implements OnInit {

  freelancers: any;
  currentFreelancer = null;
  currentIndex = -1;
  username = '';

  constructor(private freelancerService: FreelancerService) { }

  ngOnInit(): void {
    this.retrieveFreelancers();
  }

  retrieveFreelancers(): void {
    this.freelancerService.getAll()
      .subscribe(
        data => {
          this.freelancers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveFreelancers();
    this.currentFreelancer = null;
    this.currentIndex = -1;
  }

  setActiveFreelancer(freelancer, index): void {
    this.currentFreelancer = freelancer;
    this.currentIndex = index;
  }

  removeAllFreelancers(): void {
    this.freelancerService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchUsername(): void {
    this.freelancerService.findByUsername(this.username)
      .subscribe(
        data => {
          this.freelancers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
