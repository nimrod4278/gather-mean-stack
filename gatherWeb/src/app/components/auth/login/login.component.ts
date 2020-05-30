import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

import { User } from '../../../user/user.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onLogIn(form : NgForm){
    if (form.invalid){
      return;
    }
    console.log("Login posted")
    this.isLoading = true;
    return this.authService.login(form.value.email, form.value.password);
  }
}
