import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['null', Validators.required],
      password: ['null', Validators.required],
    })
  }

  onLogin() {
    this.authService.login(this.loginForm.value)
  }

  // loginForm: FormGroup;
  // loading: boolean;

  // constructor(private router: Router,
  //   private titleService: Title,
  //   private notificationService: NotificationService,
  //   private authenticationService: AuthenticationService) {
  // }

  // ngOnInit() {
  //   this.titleService.setTitle('Login');
  //   this.authenticationService.logout();
  //   this.createForm();
  // }

  // private createForm() {
  //   const savedUserusername = localStorage.getItem('savedUserusername');

  //   this.loginForm = new FormGroup({
  //     username: new FormControl(savedUserusername, Validators.required),
  //     password: new FormControl('', Validators.required),
  //     rememberMe: new FormControl(savedUserusername !== null)
  //   });
  // }

  // login() {
  //   const username = this.loginForm.get('username').value;
  //   const password = this.loginForm.get('password').value;
  //   const rememberMe = this.loginForm.get('rememberMe').value;

  //   this.loading = true;
  //   this.authenticationService
  //     .login(username.toLowerCase(), password);
  //   // .subscribe(
  //   //   data => {
  //   //     if (rememberMe) {
  //   //       localStorage.setItem('savedUserusername', username);
  //   //     } else {
  //   //       localStorage.removeItem('savedUserusername');
  //   //     }
  //   //     this.router.navigate(['/']);
  //   //   },
  //   //   error => {
  //   //     this.notificationService.openSnackBar(error.error);
  //   //     this.loading = false;
  //   //   }
  //   // );
  // }

  // // resetPassword() {
  // //   this.router.navigate(['/auth/password-reset-request']);
  // // }

}
