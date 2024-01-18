import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { Login } from 'src/app/interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  logo: string = 'assets/img/logo/Logo.png';
  username: string = 'assets/img/icon/user.png';
  passwort: string = 'assets/img/icon/vorhangschloss.png';
  userID: number = 0;
  loginData: Login[] = [];
  isLoading = false;
  showPassword: boolean = false;
  password: string = '';

  constructor(
    private loginService: LoginServiceService,
    private router: Router,
    private notificationService: NotificationServiceService
    ) { }

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ], []),
    password: new FormControl('', [
      Validators.required
    ], [])
  });

  ngOnInit(): void {
  }

  login(loginData: Login) {
    this.isLoading = true;
    //this.loginService.login(loginData.username, loginData.password).subscribe(
    //  res => {});
    if(loginData.username == 'test' && loginData.password == 'test') {
      this.router.navigate(['/']);
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
