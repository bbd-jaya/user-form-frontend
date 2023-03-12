import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private service: MyServiceService) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.service.submit(this.userForm.value).subscribe((result: any) => {
      alert(result.message)
      if (result.isSubmitted == true) {
        this.router.navigate(['']);
      }
    }, (error) => {
      alert("Error in connection")
    });
  }

}
