import { Component, OnInit } from '@angular/core';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-add-freelancer',
  templateUrl: './add-freelancer.component.html',
  styleUrls: ['./add-freelancer.component.css']
})
export class AddFreelancerComponent implements OnInit {
  freelancer = {    
    published: false,
    username: '',
    phoneNumber: '',
    email: '',
    hobby: '',
    skillset: ''
  };
  submitted = false;

  constructor(private freelancerService: FreelancerService) { }

  ngOnInit(): void {
  }

  saveFreelancer(): void {
    const data = {      
      username: this.freelancer.username,
      phoneNumber: this.freelancer.phoneNumber,
      email: this.freelancer.email,
      hobby: this.freelancer.hobby,
      skillset: this.freelancer.skillset      
    };

    console.log(data);

    this.freelancerService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newFreelancer(): void {
    this.submitted = false;
    this.freelancer = {      
      published: false,
      username: '',
      phoneNumber: '',
      email: '',
      hobby: '',
      skillset: ''
    };
  }

}
