import { Component, OnInit,  } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading = false;
  Teams = [1, 2, 3, 4];

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onSignUp(form : NgForm){
    if(form.invalid){
      console.log('form is invalid')
      return;
    }
    this.isLoading = true;
    this.authService.createUser(form.value.email, form.value.password, form.value.team);
  }
}
