import { Component, OnInit } from '@angular/core';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-freelancer-details',
  templateUrl: './freelancer-details.component.html',
  styleUrls: ['./freelancer-details.component.css']
})
export class FreelancerDetailsComponent implements OnInit {
  currentFreelancer = null;
  message = '';

  constructor(
    private freelancerService: FreelancerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getFreelancer(this.route.snapshot.paramMap.get('id'));
  }

  getFreelancer(id): void {
    this.freelancerService.get(id)
      .subscribe(
        data => {
          this.currentFreelancer = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      title: this.currentFreelancer.title,
      description: this.currentFreelancer.description,
      published: status
    };

    this.freelancerService.update(this.currentFreelancer.id, data)
      .subscribe(
        response => {
          this.currentFreelancer.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateFreelancer(): void {
    this.freelancerService.update(this.currentFreelancer.id, this.currentFreelancer)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The freelancer was updated successfully!';
          // this.router.navigate(['/freelancers']);
        },
        error => {
          console.log(error);
        });
  }

  deleteFreelancer(): void {
    this.freelancerService.delete(this.currentFreelancer.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/freelancers']);
        },
        error => {
          console.log(error);
        });
  }
}
